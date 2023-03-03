# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Your challenge is to build out this IP Address Tracker app and get it looking as close to the design as possible. To get the IP Address locations, you'll be using the [IP Geolocation API by IPify](https://geo.ipify.org/). To generate the map, we recommend using [LeafletJS](https://leafletjs.com/).

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](<./src/screenshots/Screenshot%20(133).png>)
![](<./src/screenshots/Screenshot%20(134).png>)
![](<./src/screenshots/Screenshot%20(135).png>)

### Links

- Solution URL: [Solution URL here](https://www.frontendmentor.io/solutions/ip-address-tracking-web-app-built-using-tailwind-parcel-and-vanillajs-VunaJaQWJahttps://your-solution-url.com)
- Live Site URL: [Live site URL here](https://iptrackify.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwind](https://tailwindcss.com/docs/installation) - CSS framework, helped built the webpage much faster and easier.
- [Parcel](https://parceljs.org/) - Build Tool for compiling and minifying my html,css and js codes
- Vanilla JS

### What I learned

If there's one thing I haven't tried with making ajax calls using fetch, it's going to be the code I shared below, I used this in my project, enabling the client to either enter ipv4/ipv6 addresses such as `8.8.8.8 or 152.156.12.122` and even domain names such as 'google.com or twitter.com` and for either of both entered it makes a different fetch request.

```js
const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=myIP...${value ? `&ipAddress=${value}` : ""}${domain ? `&domain=${domain}` : ""}`);
```

### Continued development

I want to keep getting better in what I do, I'm yet to attain my possible best, I also for the first time worked with parcel in this project, it helped minified my code. And with the little experience I have building websites many years back using sites builders like wordpress and wix, I've learnt that a minified websites definitely reduces load times. And that's very crucial in any web development project.

I'm yet to fully get the hang of it, but I'll definitely get the hang of it pretty soon.

### Useful resources

- [Ipify](https://www.ipify.org/) - ipify API is a simple public IP address API, easy enough to integrate into any application in seconds.
- [Leaflet](https://leafletjs.com/) - Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. Weighing just about 42 KB of JS.

## Author

- Website - [Abdullah Ayoola](https://github.com/abdullah43577)
- Frontend Mentor - [@abdullah43577](https://www.frontendmentor.io/profile/abdullah43577)
- Twitter - [@officialayo540](https://twitter.com/officialayo540)
