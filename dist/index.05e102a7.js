"use strict";
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
let popup = "Your current location\uD83D\uDCCC";
let lat;
let lng;
send.addEventListener("click", ()=>{
    // remove the container hidden classes
    ipAddressContainer.classList.add("hidden");
    locationContainer.classList.add("hidden");
    timezoneContainer.classList.add("hidden");
    ispContainer.classList.add("hidden");
    const value = input.value;
    if (!value) return;
    fetchData(value);
});
const type = new Typed(".auto-type", {
    strings: [
        "please wait...",
        "hang tight!",
        "almost there..."
    ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});
const fetchData = async (value)=>{
    try {
        document.querySelector(".loading-element").classList.remove("hidden");
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_w0JxSbeKjw3jQ3b2M2jm9q1V7MyAl&ipAddress=${value}`);
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
    } finally{
        document.querySelector(".loading-element").classList.add("hidden");
    }
};
let map = null;
let mapInitialized = false;
const mapFunction = (lat, lng)=>{
    if (!mapInitialized) {
        map = L.map(mapContainer).setView([
            lat,
            lng
        ], 15);
        console.log(map);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        mapInitialized = true;
    } else map.setView([
        lat,
        lng
    ], 15);
    L.marker([
        lat,
        lng
    ]).addTo(map).bindPopup(popup).openPopup();
};
navigator.geolocation.getCurrentPosition((position)=>{
    let { latitude , longitude  } = position.coords;
    mapFunction(latitude, longitude);
    mapInitialized || (mapInitialized = true);
}, (error)=>{
    console.log("something went wrong", error);
});

//# sourceMappingURL=index.05e102a7.js.map
