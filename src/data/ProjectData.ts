import hacc2020MD from './markdown/hacc-2020/markdown';
import hacc2021MD from './markdown/hacc-2021/markdown';
import oahuBusTrackerMD from './markdown/oahu-bus-tracker/oahu-bus-tracker';
import twitchCloutedMD from './markdown/twitch-clouted/markdown';
import ytsyncMD from './markdown/ytsync/markdown';

export interface Project {
    name: string;
    classname?: string;
    description: string[];
    cover: string;
    links: Link[];
    technologies: Technology[];
    /* Credits to the cover image */
    credits?: string;
    colorScheme: [HexCode, HexCode];
    markdown?: {
        raw: string;
    };
}

export interface Link {
    /* Type of link (github, website, etc) */
    name: string;
    href: string;
}

type HexCode = string;

type Technology =
    | 'ArcGIS'
    | 'CSS'
    | 'D3.js'
    | 'Express.js'
    | 'HTML'
    | 'Java'
    | 'JavaScript'
    | 'Meteor'
    | 'MongoDB'
    | 'Node'
    | 'React Native'
    | 'React'
    | 'Redux'
    | 'Sass'
    | 'Socket.io'
    | 'TypeScript';

const PROJECT_DATA: Project[] = [
    {
        name: `Hawai'i Annual Code Challenge 2020`,
        classname: 'hacc-2020',
        description: [
            `A data analytics dashboard of the current state of Hawai'i's IT application infrastructure. My Hawai'i Annual Code Challenge (HACC) submission.`,
        ],
        technologies: ['React', 'D3.js'],
        links: [
            {
                href: 'https://sharp-borg-ed125d.netlify.app/',
                name: 'Live Site',
            },
            {
                href: 'https://github.com/the-crewmates/hacc2020',
                name: 'Source Code',
            },
        ],
        cover: 'https://images.unsplash.com/photo-1509610696553-9243c1e230f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        credits:
            'https://unsplash.com/photos/g3esK1uXCjM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
        colorScheme: ['9b9f5f', '094074'],
        markdown: {
            raw: hacc2020MD,
        },
    },
    {
        name: `Hawai'i Annual Code Challenge 2021`,
        classname: 'hacc-2021',
        description: [
            `A web app to explore the the beautiful hikes of Hawai'i.`,
        ],
        technologies: [
            'React',
            'Sass',
            'Node',
            'MongoDB',
            'ArcGIS',
            'JavaScript',
        ],
        links: [
            {
                href: 'https://github.com/janeligio/hawaii-trails',
                name: 'Frontend Code',
            },
            {
                href: 'https://github.com/joshuahartmann/hawaii-trails-api',
                name: 'REST API Code',
            },
        ],
        cover: 'https://images.unsplash.com/photo-1542332213-31f87348057f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
        credits: 'https://unsplash.com/@petervanosdall',
        colorScheme: ['9b9f5f', '094074'],
        markdown: {
            raw: hacc2021MD,
        },
    },
    {
        name: `Oahu Bus Tracker`,
        classname: 'oahu-bus-tracker',
        description: [
            `Never miss a bus again! Track and view incoming buses at your nearest bus stop.`,
        ],
        technologies: [
            'React',
            'TypeScript',
            'Sass',
            'Node',
            'MongoDB',
            'ArcGIS',
        ],
        links: [
            {
                name: 'View it Live',
                href: 'https://oahu-bus-tracker.netlify.app',
            },
            {
                name: 'Frontend GitHub Repository (Need permission to view)',
                href: 'https://github.com/janeligio/hawaii-bus-tracker-website',
            },
            {
                name: 'REST API GitHub Repository (Need permission to view)',
                href: 'https://github.com/janeligio/dabus-api',
            },
        ],
        cover: 'https://images.unsplash.com/photo-1632276536839-84cad7fd03b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        credits: 'https://unsplash.com/@litvinov',
        colorScheme: ['9b9f5f', '094074'],
        markdown: {
            raw: oahuBusTrackerMD,
        },
    },
    {
        name: 'HDCC Job Sites',
        classname: 'hdcc-job-sites',
        description: [
            'I made this for a company to help inventory network setups of their various job sites.',
        ],
        technologies: ['React', 'Express.js', 'MongoDB'],
        links: [
            {
                href: 'https://github.com/janeligio/hdccproject',
                name: 'Source Code',
            },
        ],
        cover: 'https://images.unsplash.com/photo-1588460398188-e5f76c3ef772?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        colorScheme: ['006A6F', 'DCB190'],
    },
    {
        name: 'YTsync',
        classname: 'ytsync',
        description: [
            'A web application for those wanting to watch youtube videos together. Features include: live chat, queueing of videos, and a synchronized player.',
        ],
        technologies: ['React', 'Socket.io', 'Node'],
        links: [
            {
                href: 'https://modest-benz-608ea8.netlify.app',
                name: 'Live Site',
            },
            {
                href: 'https://github.com/janeligio/ytsync-server',
                name: 'Node Server GitHub',
            },
            {
                href: 'https://github.com/janeligio/ytsync-client',
                name: 'React Client GitHub',
            },
        ],
        cover: 'https://images.unsplash.com/photo-1585231059941-b1e00421587c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        colorScheme: ['910C0E', '000000'],
        markdown: {
            raw: ytsyncMD,
        },
    },
    {
        name: 'Snipit',
        classname: 'snipit',
        description: [
            'Save the code snippets you always seem to forget about until you need them the most.',
        ],
        technologies: ['React', 'Node', 'TypeScript', 'Sass'],
        cover: 'https://images.unsplash.com/photo-1556809218-7c7e2c57c775?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
        links: [
            {
                href: 'https://github.com/janeligio/snipsnip-server',
                name: 'Server Source Code',
            },
            {
                href: 'https://github.com/joshuahartmann/snipsnip',
                name: 'Client Source Code',
            },
        ],
        colorScheme: ['0d1b2aff', '415a77ff'],
    },
    {
        name: 'Foodie',
        classname: 'foodie',
        description: [
            'A web application that chooses the next place you will eat. Powered by yelp.',
        ],
        technologies: ['React', 'Node'],
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
        credits: 'https://unsplash.com/photos/W2iQ2hS5wZk',
        colorScheme: ['F3D4C8', '715b64'],
    },
    {
        name: 'Blue Leopards',
        classname: 'blue-leopards',
        description: ['ICS 491 Dev Project - Bowfolios Mobile Implementation'],
        technologies: ['React Native'],
        links: [
            {
                href: 'https://github.com/Blue-Leopards/BlueLeopards',
                name: 'Source Code',
            },
        ],
        cover: 'https://images.unsplash.com/photo-1554026321-fe2a83b9e292?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
        colorScheme: ['026C96', '01ABC5'],
    },
    {
        name: 'Job Melon',
        classname: 'job-melon',
        description: [
            'An online website for those in need of reliable contractors. Classmate and I created this for a summer class to explore secure coding practices. The first time I implemented authorization in an application.',
        ],
        technologies: ['React', 'Redux', 'Express.js', 'MongoDB'],
        links: [
            {
                href: 'https://github.com/janeligio/jobmelon',
                name: 'Source Code',
            },
        ],
        cover: 'https://images.unsplash.com/photo-1595475207225-428b62bda831?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        colorScheme: ['FC3941', 'CDE59A'],
    },
    {
        name: 'Twitch Clouted',
        classname: 'twitch-clouted',
        description: [`View a twitch streamer's most popular viewers.`],
        technologies: ['React', 'Node'],
        cover: 'https://images.unsplash.com/photo-1527334919515-b8dee906a34b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        links: [
            {
                href: 'https://compassionate-morse-762822.netlify.app/',
                name: 'Live Site',
            },
            {
                href: 'https://github.com/janeligio/twitch-clouted-server',
                name: 'Server Source Code',
            },
            {
                href: 'https://github.com/janeligio/twitch-clouted-client',
                name: 'Client Source Code',
            },
        ],
        colorScheme: ['28133C', '5D3790'],
        markdown: {
            raw: twitchCloutedMD,
        },
    },
    {
        name: 'Shooots',
        classname: 'shooots',
        description: [
            'Web application for helping the UH community commute to and from campus.',
        ],
        technologies: ['Meteor', 'MongoDB'],
        links: [
            {
                href: 'https://github.com/shooots/shooots',
                name: 'Source Code',
            },
        ],
        cover: 'https://images.unsplash.com/photo-1482029255085-35a4a48b7084?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
        colorScheme: ['254b54', 'cae5ff'],
    },
];

export default PROJECT_DATA;
