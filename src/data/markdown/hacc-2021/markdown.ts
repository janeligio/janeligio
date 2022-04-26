import landingPage from './media/hacc-2021-landing.png';
import featurePage from './media/hacc-2021-feature.png';

const md = `

## Why I Made This

This application was created as my groups submission for the 2021 Hawai'i Annual Code Challenge. The competition challenges participants to create innovative solutions to local problems. Our solution aimed to allow users to discover hikes that are not very busy and shift the traffic of more popular hikes. This lessens the load for those who have to maintain hikes. Not to mention you can stop hiking Koko head every two months and maybe find a hike you've never heard of!

## Overview

Users are greeted with the map of Hawai'i that displays all the hikes and trails throughout Hawai'i. They can click on a feature and see information about each hike such as traffic (how busy the hike usually is), difficulty, hours of operation, and amenities.

You can create an account and check in to a hike, much like Yelp. This data is gathered to show how busy each hike is as well as which hours of the day and which days of the week are busiest. Busier hikes are colored red on the map while hikes with less traffic are green. This is nice if you want to view hikes that are relatively quiet.

The data is stored in MongoDB and information about the traffic of each hike is kept up-to-date to keep the information relevant.

## Images

Landing Page

![Landing Page](${landingPage})

Trail Page

![Trail Page](${featurePage})
`;

export default md;
