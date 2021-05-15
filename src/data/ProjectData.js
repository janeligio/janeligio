const PROJECT_DATA = [
    {
        clickable: false,
        // name: 'HACC 2020',
        name: `Hawai'i Annual Code Challenge 2020`,
        description: "A data analytics dashboard of the current state of Hawai'i's IT application infrastructure. My Hawai'i Annual Code Challenge (HACC) submission.",
        technology: ['React', 'D3.js'],
        github: 'https://github.com/the-crewmates/hacc2020',
        links: [
            {
                href: 'https://sharp-borg-ed125d.netlify.app/',
                name: 'Live Site'
            },
            {
                href: 'https://github.com/the-crewmates/hacc2020',
                name: 'Source Code'
            },
        ],
        cover: 'https://images.unsplash.com/photo-1509610696553-9243c1e230f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        credits: 'https://unsplash.com/photos/g3esK1uXCjM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
        colorScheme: ["9b9f5f","094074"]
    },
    {
        clickable: true,
        name: 'HDCC Job Sites',
        description: 'I made this for a company to help inventory network setups of their various job sites.',
        technology: ['React', 'ExpressJS', 'MongoDB'],
        github: 'https://github.com/janeligio/hdccproject',
        links: [
            {
                href: 'https://github.com/janeligio/hdccproject',
                name: 'Source Code',
            }
        ],
        cover: 'https://images.unsplash.com/photo-1588460398188-e5f76c3ef772?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        colorScheme: ["006A6F","DCB190"]
    },
    {
        clickable: false,
        name: 'YTsync',
        description: 'A web application for those wanting to watch youtube videos together. Features include: live chat, queueing of videos, and a synchronized player.',
        technology: ['React', 'Socket.io', 'Node'],
        github: 'https://github.com/janeligio/ytsync-server',
        links: [
            {
                href: 'https://modest-benz-608ea8.netlify.app',
                name: 'Live Site',    
            },
            {
                href: 'https://github.com/janeligio/ytsync-server',
                name: 'Server Source Code',    
            },
            {
                href: 'https://github.com/janeligio/ytsync-client',
                name: 'Client Source Code',    
            },
        ],
        cover: 'https://images.unsplash.com/photo-1585231059941-b1e00421587c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        colorScheme: ["910C0E","000000"]
    },
    {
        clickable: false,
        name: 'Foodie',
        description: 'A web application that chooses the next place you will eat. Powered by yelp.',
        technology: ['React', 'Node'],
        github: 'https://github.com/janeligio/foodie',
        links: [
            {
                href: 'https://goofy-goodall-2ea514.netlify.app',
                name: 'Live Site',    
            },
            {
                href: 'https://github.com/janeligio/foodie',
                name: 'Client Source Code',    
            },
            {
                href: 'https://github.com/janeligio/foodie-api',
                name: 'Server Source Code',    
            },
        ],
        cover: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=970&q=80',
        colorScheme: ["F3D4C8","715b64"]
    },
    {
        clickable: true,
        name: 'Blue Leopards',
        description: 'ICS 491 Dev Project - Bowfolios Mobile Implementation',
        technology: ['React Native'],
        github: 'https://github.com/Blue-Leopards/BlueLeopards',
        links: [
            {
                href: 'https://github.com/Blue-Leopards/BlueLeopards',
                name: 'Source Code'
            }
        ],
        cover: 'https://images.unsplash.com/photo-1554026321-fe2a83b9e292?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
        colorScheme: ["026C96","01ABC5"]

    },
    {
        clickable: true,
        name: 'Job Melon',
        description: 'An online website for those in need of reliable contractors. Classmate and I created this for a summer class to explore secure coding practices. The first time I implemented authorization in an application.',
        technology: ['React', 'Redux', 'ExpressJS', 'MongoDB'],
        github: 'https://github.com/janeligio/jobmelon',
        links: [
            {
                href: 'https://github.com/janeligio/jobmelon',
                name: 'Source Code'
            }
        ],
        cover: 'https://images.unsplash.com/photo-1595475207225-428b62bda831?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        colorScheme: ["FC3941","CDE59A"]
    },
    {
        clickable: false,
        name: 'Twitch Clouted',
        description: `View a twitch streamer's most popular viewers.`,
        technology: ['React', 'Node'],
        github: 'https://github.com/janeligio/twitch-clouted-server',
        cover: 'https://images.unsplash.com/photo-1527334919515-b8dee906a34b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        links: [
            {
                href: 'https://compassionate-morse-762822.netlify.app/',
                name: 'Live Site'
            },
            {
            href: 'https://github.com/janeligio/twitch-clouted-server',
            name: 'Server Source Code'
            },
            {
                href: 'https://github.com/janeligio/twitch-clouted-client',
                name: 'Client Source Code'
            },
        ],
        colorScheme: ["28133C","5D3790"]
    },
    {
        clickable: true,
        name: 'Shooots',
        description: 'Web application for helping the UH community commute to and from campus.',
        technology: ['Meteor', 'MongoDB'],
        github: 'https://github.com/shooots/shooots',
        links: [
            {
                href: 'https://github.com/shooots/shooots',
                name: 'Source Code'
            }
        ],
        cover: 'https://images.unsplash.com/photo-1482029255085-35a4a48b7084?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
        colorScheme: ["254b54","cae5ff"]
    }
];

export default PROJECT_DATA;