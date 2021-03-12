import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    return (
        <>
            {PROJECT_DATA.map(p => 
                <ProjectCard
                    clickable={p.clickable}
                    key={p.name}
                    name={p.name} 
                    description={p.description} 
                    technology={p.technology} 
                    github={p.github}
                    links={p.links}
                    cover={p.cover} />)}
        </>
    );
};

const ProjectCard = props => {
    const { clickable, name, description, technology, github, cover, links } = props;
    let Links = null;
    if(links) {
        Links = links.map(link => {
            return (
            <a key={link.href} className="card-project-link" href={link.href} target="_blank" rel="noopener noreferrer">
                {link.name}
            </a>);
        })
    }

    const Wrapper = (props) => {
        if(clickable) {
            return (<a className="card-project" href={github} target="_blank" rel="noopener noreferrer" style={{backgroundImage: `url(${cover})`}}>
                    {props.children}</a>);
        } else {
            return (<div className="card-project-2" style={{backgroundImage: `url(${cover})`}}>
                    {props.children}
                    </div>);
        }
    }

	return (
		<Wrapper>
            <div className="card-project-content">
                <span className="card-github-icon"><FaGithub size="2em"/></span>
                <div style={{height:'75%'}}>
                    <h3 className="card-project-name">{name}</h3>
                    <p className="card-project-description">{description}</p>
                </div>
                <div className="card-project-links">
                    {Links}
                </div>
                <div style={{height:'10%'}}>
                    <ul style={{display:'flex'}}>
                        {technology.map(t => {
                            return (<Tag key={Math.random()} name={t}/>);
                        })}
                    </ul>
                </div>
            </div>
        </Wrapper>
	);
};

const Tag = props => {
    const { name } = props;
    return (
        <li className={`card-project-tag ${name}`}>
            {name}
        </li>
    );
};

const PROJECT_DATA = [
    {
        clickable: false,
        name: 'HACC 2020',
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
                name: 'Repository'
            },
        ],
        cover: 'https://images.unsplash.com/photo-1509610696553-9243c1e230f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
        clickable: true,
        name: 'HDCC Job Sites',
        description: 'I made this for a company to help inventory network setups of their various job sites.',
        technology: ['React', 'ExpressJS', 'MongoDB'],
        github: 'https://github.com/janeligio/hdccproject',
        cover: 'https://images.unsplash.com/photo-1588460398188-e5f76c3ef772?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
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
                name: 'Node Server Repo',    
            },
            {
                href: 'https://github.com/janeligio/ytsync-client',
                name: 'React Frontend Repo',    
            },
        ],
        cover: 'https://images.unsplash.com/photo-1585231059941-b1e00421587c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    },
    {
        clickable: true,
        name: 'Blue Leopards',
        description: 'ICS 491 Dev Project - Bowfolios Mobile Implementation',
        technology: ['React Native'],
        github: 'https://github.com/Blue-Leopards/BlueLeopards',
        cover: 'https://images.unsplash.com/photo-1554026321-fe2a83b9e292?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
    },
    {
        clickable: true,
        name: 'Job Melon',
        description: 'An online website for those in need of reliable contractors. Classmate and I created this for a summer class to explore secure coding practices. The first time I implemented authorization in an application.',
        technology: ['React', 'Redux', 'ExpressJS', 'MongoDB'],
        github: 'https://github.com/janeligio/jobmelon',
        cover: 'https://images.unsplash.com/photo-1595475207225-428b62bda831?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
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
            name: 'Node Backend'
            },
            {
                href: 'https://github.com/janeligio/twitch-clouted-client',
                name: 'React Frontend'
            },
        ]
    },
    {
        clickable: true,
        name: 'Shooots',
        description: 'Web application for helping the UH community commute to and from campus.',
        technology: ['Meteor', 'MongoDB'],
        github: 'https://github.com/shooots/shooots',
        cover: 'https://images.unsplash.com/photo-1482029255085-35a4a48b7084?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80 '
    },
];

export default Projects;