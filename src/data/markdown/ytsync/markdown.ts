import demo from './media/ytsync-demo.gif';

const md = `
---

March 2021

## Why I Made This

I made this app because I found out about [socket.io](https://socket.io). It seems like a really cool technology that I wanted to make something with. Apart from that I wanted to improve upon by JavaScript and React skills.

## Overview

When you navigate to the website, you can either create a room or join a room by typing in the room ID. You are assigned a random name which you can change. Users in the room can chat or add youtube video to the queue. Anyone can pause, fast-forward, or choose a video to play and the YouTube video will be kept in sync with all users in the room! Like magic.

This is probably the project I'm most proud of. The concepts and functionality are pretty simple but its implementation was the challenge. How do I keep the video player in sync with all the users?? This was my first exploration in state management. \`socket.io\` wraps around web socket technology to make it easier to work with.

Every room is represented by a socket. All users within a room are connected to the socket. The users themselves can be considered a socket. A socket can emit and receive events. So, every time an event occurs such as: pausing a video, playing a video, or adding a video, that event is emitted through the socket to all users connected to the socket. It's actually pretty simple when I draw it out like that. Mind you this was very tough, for me, to implement.

Thanks for reading. Visit the website and try it out yourself if you want.

## Demo

Here's a small demo of what YTsync can do.

![ytsync-demo](${demo})
`;

export default md;
