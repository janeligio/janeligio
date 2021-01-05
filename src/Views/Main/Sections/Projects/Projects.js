import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <>
            {PROJECT_DATA.map(p => 
                <ProjectCard
                    key={p.name}
                    name={p.name} 
                    description={p.description} 
                    technology={p.technology} 
                    github={p.github} 
                    cover={p.cover} />)}
        </>
    );
};

const ProjectCard = props => {
    const { name, description, technology, github, cover } = props;
	return (
		<a className="card-project" href={github} target="_blank" rel="noopener noreferrer" style={{backgroundImage: `url(${cover})`}}>
            <div className="card-project-content" style={{}}>
                <h3 className="card-project-name">{name}</h3>
                <p className="card-project-description">{description}</p>
                <ul style={{display:'flex'}}>
                    {technology.map(t => {
                        return (<Tag key={Math.random()} name={t}/>);
                    })}
                </ul>
            </div>
		</a>
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
        name: 'HACC 2020',
        description: "Hawai'i Annual Code Challenge",
        technology: ['React', 'D3.js'],
        github: 'https://github.com/the-crewmates/hacc2020',
        cover: 'https://images.unsplash.com/photo-1509610696553-9243c1e230f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
        name: 'HDCC Job Sites',
        description: 'I made this for a company to help inventory network setups of their various job sites.',
        technology: ['React', 'ExpressJS', 'MongoDB'],
        github: 'https://github.com/janeligio/hdccproject',
        cover: 'https://images.unsplash.com/photo-1588460398188-e5f76c3ef772?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
        name: 'Job Melon',
        description: 'An online website for those in need of reliable contractors. Classmate and I created this for a summer class to explore secure coding practices. The first time I implemented authorization in an application.',
        technology: ['React', 'Redux', 'ExpressJS', 'MongoDB'],
        github: 'https://github.com/janeligio/jobmelon',
        cover: 'https://images.unsplash.com/photo-1595475207225-428b62bda831?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
        name: 'Blue Leopards',
        description: 'ICS 491 Dev Project - Bowfolios Mobile Implementation',
        technology: ['React Native'],
        github: 'https://github.com/Blue-Leopards/BlueLeopards',
        cover: 'https://images.unsplash.com/photo-1554026321-fe2a83b9e292?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
    },
    {
        name: 'Shooots',
        description: 'Web application for helping the UH community commute to and from campus.',
        technology: ['Meteor', 'MongoDB'],
        github: 'https://github.com/shooots/shooots',
        cover: 'https://images.unsplash.com/photo-1482029255085-35a4a48b7084?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80 '
    },

];

export default Projects;