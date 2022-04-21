const md = `
---

July 2019

## Why I Made This

This was an application I made for a company I interned for as a part of my required project submission for the internship program that connected me to the company. I worked as an IT intern helping the department with day-to-day tasks such as configuring computers for hires and being introduced to how to set up networks for various job sites.

I have to explain the background behind the creation of this app. One of the responsibilities of the IT department was helping other branches, job sites, or offices, apart from the main office with IT support. One of the things they needed to do when helping someone out was needing to know their network setup. It was also very valuable to know their network inventory, which included their routers and switches, and their exact models.

So I made an app to simply visualize this data, and create, edit, delete, or search these inventory setups. Just for fun I also tried to make it look kind of good.

## Overview

One of the challenges was how to model the data. I wasn’t very experienced with handling data, so I was a little bit about of my depth. I tried to keep it as simple as possible. I used a noSQL database in MongoDB and basically structured it as job sites and those job sites having equipment and that equipment being either a router or switch, with a model number.

Another challenge was simply figuring out which technology to use. For the user interface I figured I already was using React, so I naturally chose that. But how do I get that to interface with a database? At first my sort of mentor/coworker suggested I try using Microsoft Access. Even if I did, I didn’t really know how to make it interface with my application. So I surrendered to what I already knew which was creating a full-stack application where the front-end and back-end can communicate very easily.

If I could go back with the things I’ve learned, I would probably find some way to visualize the data better.

I enjoyed the challenge of creating something that could actually be used and that could benefit the company in some capacity. Creating a suitable UI was difficult, and it wasn’t perfect or super innovative, but I still am proud of it.

My mentor gave me a lot of free reign on what the project would be. She gave me the problem and presented me with simple instructions. I gathered more requirements, such as specifics, and exactly what data is involved, but everything else such as what technology to use and how I present the data was completely up to me.

## Links

[Source Code](https://github.com/janeligio/hdccproject)
`;

export default md;
