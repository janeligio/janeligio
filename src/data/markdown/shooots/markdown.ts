import shooots from './media/shoots.png';

const md = `
---

December 2017

## Pitch

For our ICS 314 class, two other peers and I worked together to create an web app for the UH community to easily find carpools going to school.

## Overview

  Our team of three were tasked with creating a website that helped UH students with a common problem. We were allowed to choose that problem and so we went with the difficulty of parking on campus. Our solution was to design an app that allowed users to create carpool appointments if they were driving to school and to schedule to be in a carpool if they needed a ride to campus.
  
  Users' first interaction is with our landing page which greets visitors with basic information about the website. They would then need to log in. New users are directed to the profile page where they would need to create a user profile and indicate whether or not they are a driver or a rider. They would then be redireted to the home page where they would have a choice between giving a ride or finding a ride. Choosing to give a ride would allow drivers to shedule a carpool appointment where they can specify the time they were headed to school and the amount of seats available. Finding a ride would redirect riders to the find a ride page where riders can view carpool appointments based on the time of day (morning, afternoon, evening). They can schedule a ride and it would send a notification to drivers where they would have to confirm you. 
  
  My main contribution to the project was the functionality of the website, namely scheduling rides and creating rides. I helped implement the two database collections the app was run on which hold the users' profile information and the users' appointments. I also contributed to the functionality of the filter page and its use in viewing correct carpools. 
  
   I learned so much about meteor development within a week period of trying to understand the project structure and how the client and server interact with each other. Though first intimidated, I dug down and went to studying everything about how meteor works. It is powered by javascript but it is simply the language employed. I had to get a grasp on how collections work and how templating works. 
   
   This was the most fulfilling project I've ever done and I am very proud of what our team was able to accomplish. Although there are many things that can be improved upon, I believe it is very important toward my development in become a software engineer. 
   
   If you want to learn more about our project, visit our github [repository](https://github.com/shooots).

## shooots!

![Shooots Landing Page](${shooots})
`;

export default md;
