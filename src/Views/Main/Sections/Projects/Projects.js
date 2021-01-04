import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <>
            {PROJECT_DATA.map(p => 
                <ProjectCard
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
		<a className="card-project" href={github} target="_blank" style={{backgroundImage: `url(${cover})`}}>
            <div className="card-project-content" style={{}}>
                <h3 className="card-project-name">{name}</h3>
                <p className="card-project-description">{description}</p>
                <ul style={{display:'flex'}}>
                    {technology.map(t => {
                        return (<Tag name={t}/>);
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
        name: 'HDCC Job Sites',
        description: 'I made this for a company to help inventory network setups of their various job sites.',
        technology: ['React', 'ExpressJS', 'MongoDB'],
        github: 'https://github.com/janeligio/hdccproject',
        cover: 'https://www.janeligio.com/static/media/all%20sites.91390868.gif'
    },
    {
        name: 'Job Melon',
        description: 'An online website for those in need of reliable contractors. Classmate and I created this for a summer class to explore secure coding practices. The first time I implemented authorization in an application.',
        technology: ['React', 'Redux', 'ExpressJS', 'MongoDB'],
        github: 'https://github.com/janeligio/jobmelon',
        cover: 'https://www.janeligio.com/static/media/jobmelon1.37143fbb.gif'
    },
    {
        name: 'Shooots',
        description: 'Web application for helping the UH community commute to and from campus.',
        technology: ['Meteor', 'MongoDB'],
        github: 'https://github.com/shooots/shooots',
        cover: 'https://www.janeligio.com/static/media/shooots1.19f3f816.gif'
    },
];

export default Projects;