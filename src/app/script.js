const mapContainer = document.getElementById("map");
const ipAddress = document.querySelector(".ipAddress");
const locationEl = document.querySelector(".location");
const timezone = document.querySelector(".timezone");
const isp = document.querySelector(".isp");
const input = document.querySelector("input");
const send = document.querySelector(".send");

const ipAddressContainer = document.querySelector(".ip--container");
const locationContainer = document.querySelector(".location--container");
const timezoneContainer = document.querySelector(".timezone--container");
const ispContainer = document.querySelector(".isp--container");

let popup = "Your current location📌";
let lat;
let lng;

const validIpTest =
  /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}){1}|((([0-9A-Fa-f]{1,4}:){5}:)(:[0-9A-Fa-f]{1,4}){1,2})|((([0-9A-Fa-f]{1,4}:){4}:)(:[0-9A-Fa-f]{1,4}){1,3})|((([0-9A-Fa-f]{1,4}:){3}:)(:[0-9A-Fa-f]{1,4}){1,4})|((([0-9A-Fa-f]{1,4}:){2}:)(:[0-9A-Fa-f]{1,4}){1,5})|(([0-9A-Fa-f]{1,4}:){1}:)(:[0-9A-Fa-f]{1,4}){1,6}|(:((:[0-9A-Fa-f]{1,4}){1,7}|:))|((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){1,4})$/;

const validDomainTest = /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z]{2,}){1,}$/i;

const executeCode = () => {
  // remove the container hidden classes
  ipAddressContainer.classList.add("hidden");
  locationContainer.classList.add("hidden");
  timezoneContainer.classList.add("hidden");
  ispContainer.classList.add("hidden");

  const value = input.value;
  if (!value) return;

  if (validIpTest.test(value)) {
    fetchData(value, "");
  } else if (validDomainTest.test(value)) {
    fetchData("", value);
  } else {
    input.style.border = "1px solid red";
    let value = input.value;
    input.value = "Please enter a valid ip address or domain name";
    input.style.color = "red";

    setTimeout(() => {
      input.style.border = "none";
      input.value = value;
      input.style.color = "black";
    }, 3000);
    return;
  }
};

send.addEventListener("click", executeCode);
document.addEventListener("keydown", e => {
  if (e.key === "Enter") executeCode();
});

const type = new Typed(".auto-type", {
  strings: ["please wait...", "hang tight!", "almost there..."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

const fetchData = async (value, domain) => {
  try {
    document.querySelector(".loading-element").classList.remove("hidden");
    const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_w0JxSbeKjw3jQ3b2M2jm9q1V7MyAl${value ? `&ipAddress=${value}` : ""}${domain ? `&domain=${domain}` : ""}`);

    if (!res.ok) throw new Error(`Please make sure you're connected to the internet and try again!`);

    const data = await res.json();

    // remove the container hidden classes
    ipAddressContainer.classList.remove("hidden");
    locationContainer.classList.remove("hidden");
    timezoneContainer.classList.remove("hidden");
    ispContainer.classList.remove("hidden");

    ipAddress.textContent = data.ip;
    locationEl.textContent = `${data.location.city} ${data.location.country} ${data.location.geonameId}`;
    timezone.textContent = `UTC${data.location.timezone}`;
    isp.textContent = data.isp;

    popup = `${data.location.city} ${data.location.country}'s location📌`;

    lat = data.location.lat;
    lng = data.location.lng;
    mapFunction(lat, lng);
  } catch (err) {
    console.error(`Something went wrong, ${err.message}`);
  } finally {
    document.querySelector(".loading-element").classList.add("hidden");
  }
};

let map = null;
let mapInitialized = false;

const mapFunction = (lat, lng) => {
  if (!mapInitialized) {
    map = L.map(mapContainer).setView([lat, lng], 15);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    mapInitialized = true;
  } else {
    map.setView([lat, lng], 15);
  }

  L.marker([lat, lng]).addTo(map).bindPopup(popup).openPopup();
};

navigator.geolocation.getCurrentPosition(
  position => {
    let { latitude, longitude } = position.coords;
    mapFunction(latitude, longitude);
    mapInitialized ? null : (mapInitialized = true);
  },
  error => {
    console.log("something went wrong", error);
  }
);
