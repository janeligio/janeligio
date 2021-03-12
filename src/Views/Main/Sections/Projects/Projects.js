import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import PROJECT_DATA from '../../../../data/ProjectData';
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

export default Projects;