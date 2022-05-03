import landing from './media/hawaii-soccer-landing.png';
import create from './media/hawaii-soccer-create.png';
import find from './media/hawaii-soccer-find.png';

const md = `
---

May 2021

## Languages

- JavaScript
- React
- Node.js
- CSS
- TypeScript
- Express.js
- MongoDB

## Pitch

Find or schedule pick-up soccer games in Hawai'i!

## Why I Made This

This was one of my experiences with TypeScript after reading about the buzz about it. I didn't realize it at the time but writing vanilla JS feels like walking a narrow mountain ridge. Anyway, I decided to write a simple Node.js server that interfaces with a MongoDB database and serves as an API for the database.

I was also thinking of some sort of way to find pick-up games for soccer. There are leagues but who wants to 1) spend money like that to play soccer and 2) make that kind of commitment. That's the beautiful thing about basketball. There are pick-up games happening at all times. Soccer requires even less... Some grass, a ball, and four things to make a makeshit goalpost out of. To me, that is the beautiful game. Again, in retrospect the thought of getting people together during a global pandemic didn't seem the best idea.

I wondered about how other apps do it. There had to be something like this for basketball, surely. So I found a website called [InfiniteHoops](https://infinitehoops.com/). It did sort of exactly what I envisioned and more. I did a bit of digging, curious of who made this website and found [Broadside Digital](https://broadside.digital) for whom I am now employed by! Call that serendipitous.

## Overview

This is a full-stack application made with MongoDB, Express.js, Node.js (TypeScript), and React.

The backend provides an API to find pick-up games and venues along with creating games. It also sends email notifications when a player confirms interest in a game.

On the frontend you can view games that are happening or create one yourself by specifying a time and place as well as optional notes for other prospective ballers.

Some things I would have wanted to implement are messaging and accounts.

## Links

[Backend Repository](https://github.com/janeligio/hawaii-soccer-server)

[Frontend Repository](https://github.com/janeligio/hawaii-soccer-client)

## Images

Landing Page

![Landing Page](${landing})

Create Page

![Create Page](${create})

Find Page

![Find Page](${find})
`;

export default md;
