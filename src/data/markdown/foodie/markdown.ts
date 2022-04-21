import landing from './media/foodie-landing.png';
import result from './media/foodie-result.png';

const md = `
---

March 2021

## Pitch

Can't make up your mind on where to eat? Let us choose for you. 


## Why I Made This

My friends could never decide where to eat...Yup, everyone's been there. It could get frustrating. So I said, you know what I'm going to make something choose for us! Take the decision out of our hands! Also there was a chance of finding food places we would never now about.

Also, I wanted to get my feet wet in TypeScript so I implemented the React front end and REST API both in TypeScript. I also wanted to interact with another REST API (Yelp's).

## Overview

This app allows you to either use your current location or an address, that is later geocoded, to search for restaurants. Although it's supposed to decide for you, once a restaurant has been chosen, you can cycle and view more restaurants by clicking to the next result.

It uses Yelp's API to do just that. The backend is a sort of middleman between Yelp and the frontend. It could have been probably better to implement this with a serverless function, but I didn't know about those at the time.

I learned more about interacting with REST APIs and this was the first time I used the Geolocation API that browsers have.

## Links

[View Live Site](https://goofy-goodall-2ea514.netlify.app)

## Images

![Landing Page](${landing})

![Result Page](${result})
`;

export default md;
