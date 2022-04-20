import ohbLanding from './media/ohb-landing.png';
import ohbBusStops from './media/ohb-bus-stops.png';
import ohbArrivals from './media/ohb-arrivals.png';
import ohbLiveTracking from './media/ohb-live-tracking.png';
import ohbFavorites from './media/ohb-favorites.png';

import ohbMobileLanding from './media/ohb-mobile-landing.png';
import ohbMobileArrivals from './media/ohb-mobile-arrivals.png';
import ohbMobileLiveTracking from './media/ohb-mobile-live-tracking.png';
import ohbMobileFavorites from './media/ohb-mobile-favorites.png';

const md = `
# Oahu Bus Tracker
April 2021

---

## Languages
- ArcGIS
- MongoDB
- Node
- React
- Sass
- TypeScript

## Pitch
Never miss a bus again! Track and view incoming buses at your nearest bus stop.

## Why I Made This
The inspiration for creating this app was the lack of a web implementation of the DaBus app for Oahu's commuters. I also wanted to create something with the \`ArcGIS API\`. I'd initially used it with a project and wanted to realize its full potential.

## Overview
This app is for commuters for the residents of Oahu who take the bus (if you couldn't tell).

Features include:
- View the nearest bus stops near your location on a map
- View any bus stops on the map
- View incoming buses at a bus stop and when they will arrive (live tracking)
- Add bus stops to your favorites to view incoming buses faster
- Set a name to a favorite bus stop

The frontend React app communicates with the backend REST API to fetch data about: bus stop locations, bus stop arrivals, bus routes, and live bus data.

The frontend leverages power of \`ArcGIS API\` to display data on the map.

The backend REST API fetches data from official government resources to capture GEOJSON and live bus data. It stores bus route and bus stop geometries in MongoDB for faster data retrieval.

## Links

- [View it Live](https://oahu-bus-tracker.netlify.app)

- [Frontend GitHub Repository (Need permission to view)](https://github.com/janeligio/hawaii-bus-tracker-website)

- [REST API GitHub Repository (Need permission to view)](https://github.com/janeligio/dabus-api)

## Images

---

Landing Page

![Landing Page](${ohbLanding})

Viewing Nearest Bus Stops

![Viewing Nearest Bus Stops](${ohbBusStops})

Viewing Live Arrivals

![Viewing Live Arrivals](${ohbArrivals})

Tracking live location of bus

![Tracking live location of bus](${ohbLiveTracking})

Favorites Page

![Favorites Page](${ohbFavorites})


Landing Page (Mobile)

![Mobile Landing Page](${ohbMobileLanding})

Viewing Nearest Bus Stops (Mobile)

![Mobile Viewing Nearest Bus Stops](${ohbMobileArrivals})

Live Bus Tracking (Mobile)

![Mobile live bus tracking](${ohbMobileLiveTracking})

Favorites Page (Mobile)

![Mobile Favorites Page](${ohbMobileFavorites})
`;

export default md;
