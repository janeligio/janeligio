import landing from './media/snipit-landing.png';
import logIn from './media/snipit-log-in.png';
import snippets from './media/snipit-snippets.png';
import createPage1 from './media/snipit-create-1.png';
import createPage2 from './media/snipit-create-2.png';

const md = `
---

August 2021

## Pitch

Save the code snippets you always seem to forget about until you need them the most.


## Why I Made This

My friend Joshua and I wanted to create something together to strenghten our engineering skills by creating something on a moderate scale. The idea itself isn't revolutionary and there are much better alternatives but we wanted to see what we could come up with.

## Overview

Upon creating an account, users can navigate to the create page where they can start saving their snippets. This create page allows selection from a set of programming languages. The editor you can type your code inclues syntax highlighting for the selected language which is probably the coolest part of this whole app. 

You can then view your saved snippets in the account page. From here you can delete, edit, or mark your snippets as hidden. You can also navigate to your account settings and change your username.

The explore page is an unfinished feature that we planned to implement in order to add a social element to the website. Your snippets could be public allowing other users to discover them.

Data is stored in MongoDB and is retrieved by the Node Express server written in TypeScript. We used JWT to authenticate and authorize users.

Some challenges included properly and securely handling password encryption and authentication/authorization. We are not security specialists but we overcame this big hurdle.

## Links

[Node Server Code](https://github.com/janeligio/snipit-api)

[React App Code (Need permission to view)](https://github.com/janeligio/snipit-website',)

## Images

![Landing Page](${landing})

![Log In Page](${logIn})

![Viewing Saved Snippets](${snippets})

![Create Page 1](${createPage1})

![Create Page 2](${createPage2})
`;

export default md;
