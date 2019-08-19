import React from 'react';
import { CSSTransition } from "react-transition-group";

/* Project - HDCC Job Sites */
import hdcc1 from '../hdcc/all sites.gif';
import hdcc2 from '../hdcc/network.gif';
import hdcc3 from '../hdcc/create.gif';
import hdcc4 from '../hdcc/all sites printing.gif';

/* Project - JobMelon */
import jobmelon1 from '../jobmelon/jobmelon1.gif';
import jobmelon2 from '../jobmelon/jobmelon2.gif';

/* Project - Shooots */
import shooots1 from '../shooots/shooots1.gif';

/* Icons */
import express from '../icons/express.svg';
import redux from '../icons/redux.png';
import { 
	FaGithub, 
	FaReact,
	FaNode
} from 'react-icons/fa';
import {
	MdExpandMore,
	MdExpandLess} from 'react-icons/md';
import { DiMongodb, DiMeteorfull } from "react-icons/di";



const Projects = () => {
	const [showHDCC, setShowHDCC] = React.useState(false);
	const [showJobMelon, setShowJobMelon] = React.useState(false);
	const [showShooots, setShowShooots] = React.useState(false);
	const [showTasteTea, setShowTasteTea] = React.useState(false);
    return (
    <>
    <Section id="projects" title="Projects"/>
            <div style={{
                display:'flex',
                flexDirection:'column',
                alignItems: 'center',
            }}>

                <h3>HDCC Job Sites</h3>
                <div>
                <DiMongodb color="#589636" size="2em"/>
                <img loading="lazy" src={express} alt="ExpressJS icon" style={{height:'2em'}}/>
                <FaReact style={{marginLeft:'.3em', marginRight:'.3em'}} color="#61dbfb" size="2em"/> 
                <FaNode style={{marginLeft:'.3em', marginRight:'.3em'}} color="#68A063" size="2em"/>
                </div>
            
                    <div>
                        <Link link="https://github.com/janeligio/hdccproject" title={<FaGithub color="#333" size="2em"/>}/>
                    </div>
                    <p style={{width:'70%', textAlign:'center'}}>I made this for a company to help inventory network setups of their various job sites.</p>
                <CSSTransition
                in={showHDCC}
                timeout={0}
                classNames="list-transition"
                unmountOnExit
                appear
                >
                <>
                <ProjectGif gif={hdcc1} alt="HDCC Job Sites Media 1"/>
                <GifCaption content="Master grid view of all job sites."/>
                <ProjectGif gif={hdcc2} alt="HDCC All Sites"/>
                <GifCaption content="Table view of all job sites with print feature."/>
                </>
                </CSSTransition>
                {!showHDCC 
                ? 	<MdExpandMore size='2em' onClick={() => setShowHDCC(!showHDCC)}/>
                :   <MdExpandLess size='2em' onClick={() => setShowHDCC(!showHDCC)}/>
                }

                <h3>Job Melon</h3>
                <div style={{marginBottom:'.3em'}}>
                    <DiMongodb color="#589636" size="2em"/>
                    <img loading="lazy" src={express} alt="ExpressJS icon" style={{height:'2em'}}/>
                    <FaReact style={{marginLeft:'.3em', marginRight:'.3em'}} color="#61dbfb" size="2em"/> 
                    <img loading="lazy" src={redux} alt="Redux icon" style={{height:'2em', marginLeft:'.3em', marginRight:'.3em', }}/>
                    <FaNode style={{marginLeft:'.3em', marginRight:'.3em'}} color="#68A063" size="2em"/>
                </div>
                    <div>
                        <Link link="https://github.com/janeligio/jobmelon" title={<FaGithub color="#333" size="2em"/>}/>
                    </div>
                    <p style={{width:'70%', textAlign:'center'}}>
                        An online website for those in need of reliable contractors. Classmate and I created this for a summer class to explore secure coding practices. The first time I implemented authorization in an application.
                    </p>
                    <div style={{display:'flex'}}>
                        <Link link="https://github.com/uh-watermelons/jobmelon/blob/master/ICS_491-JobMelon_Documentation.pdf"
                            title="Docs"/>
                        <Link link="https://github.com/uh-watermelons/jobmelon/wiki/JobMelon-Wiki"
                            title="Wiki"/>
                    </div>
                <CSSTransition
                in={showJobMelon}
                timeout={0}
                classNames="list-transition"
                unmountOnExit
                appear
                >
                <>
                <ProjectGif gif={jobmelon1} alt="Job Melon 1"/>
                <GifCaption content="Logging in and viewing current job listings."/>
                <ProjectGif gif={jobmelon2} alt="Job Melon 2"/>
                <GifCaption content="Viewing profile and marking job listings complete."/>
                </>
                </CSSTransition>
                {!showJobMelon
                ? 	<MdExpandMore size='2em' onClick={() => setShowJobMelon(!showJobMelon)}/>
                :   <MdExpandLess size='2em' onClick={() => setShowJobMelon(!showJobMelon)}/>
                }
                
                <h3 style={{paddingBottom:0}}>Shooots</h3>
                <div>
                    <DiMeteorfull color="#DE4F4F" size="4.5em"/>
                </div>
                    <div>
                        <Link link="https://github.com/shooots/shooots" title={<FaGithub color="#333" size="2em"/>}/>
                    </div>
                    <p style={{width:'70%', textAlign:'center'}}>
                    Web application for helping the UH community commute to and from campus.
                    </p>
                    <Link link="https://shooots.github.io" title="Docs"/>
                <CSSTransition
                in={showShooots}
                timeout={0}
                classNames="list-transition"
                unmountOnExit
                appear
                >
                <>
                <ProjectGif gif={shooots1} alt="Shooots Project Media"/>
                <GifCaption content="View of dashboard."/>
                </>
                </CSSTransition>
                {!showShooots
                ? 	<MdExpandMore size='2em' onClick={() => setShowShooots(!showShooots)}/>
                :   <MdExpandLess size='2em' onClick={() => setShowShooots(!showShooots)}/>
                }		</div>

    </>
)};


const Section = ({id, title, content}) => (
        <div id={ id } className="grid">
          <div className="content-wrap">
              <h2 className="content-title">{ title }</h2>
              { content }
          </div>
        </div>
);
const ProjectGif = ({gif, alt, action}) => (
	<img onClick={action} style={{
		width:'60%',
		boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)',
		margin:'1em'
	}} src={gif} alt={alt}/>
);
const GifCaption = ({content}) => (
	<p style={{width:'50%', textAlign:'center', fontSize:'.8em'}}>
	{content}
	</p>
);

const Link = ({link, title}) => (
	<a href={link} target="_blank" style={{
		color:"#2A5DB0",
		textDecoration: "none",
		margin:'.3em',
		fontWeight:'bold'
	}}>{title}</a>
);

export default Projects;