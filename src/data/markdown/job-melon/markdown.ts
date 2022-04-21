import homePage from './media/job-melon-home.png';
import registerPage from './media/job-melon-register.png';
import loginPage from './media/job-melon-log-in.png';
import createPage from './media/job-melon-create.png';
import profilePage from './media/job-melon-profile.png';
import postingPage from './media/job-melon-posting.png';

const md = `
---

July 2019

## Pitch

An online website for those in need of reliable contractors.

## Why I Made This

We made this as a part of a class that explores secure coding practices. Our goal was to make an application that handled sensitive data and to secure that data. The data that we were securing were user passwords and credit card information. We had to make sure passwords were properly hashed/salted in the database in the case a database breach would not compromise the passwords.

We decided to use this MERN stack to quickly boostrap our app as we had about 5 weeks to (for the most part) implement the core functionality.

## Overview

Job Melon is a web application that connects contractors with clients for any type of small job or gig. Functionality includes creating a profile. From there a user can list jobs for a fee. Jobs can be viewed on the home page of the website. Anyone with an account can view the job listings and get in touch with the clients.

The first time I implemented authorization in an application. That was the toughest part. There are a number of ways to authenticate and authorize users. I had no idea how users are authenticated before this.

This was also my first Fullstack, fully-fledged React applications I created. It was grueling because of the time constraint. 

If we had more time we wanted to implement instant messaging and maybe payment authorization. This was more of a proof-of-concept app and we ultimately got the A we deserved :).

There were also problems with one of my group members so we had to pull the weight. Shout out to Jack T. !

## Links

[Source Code](https://github.com/janeligio/jobmelon)

[Wiki](https://github.com/uh-watermelons/jobmelon/wiki/JobMelon-Wiki)

## Images


Home Page

![Home Page](${homePage})

Creating an Account

![Create an Account](${registerPage})

Log In Page

![Log In](${loginPage})

Creating a Job Posting

![Create a Job](${createPage})

Profile Page

![Profile Page](${profilePage})

Example Job Posting

![Job Posting](${postingPage})
`;

export default md;
