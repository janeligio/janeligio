import React from 'react';
import './Main.css';
import Projects from './Sections/Projects/Projects.js';
import Skills from './Sections/Skills/Skills.js';
import Experience from './Sections/Experience/Experience.js';
import Contact from './Sections/Contact/Contact.js';

const Main = props => {
    const Sections = {
        "Projects": <Projects/>,
        "Skills": <Skills/>,
        "Experience": <Experience/>,
        "Contact": <Contact/>
    };

    return (
        <main className="main">
            <div className="main-content-wrapper">
                <div className="main-content">
                    { Sections[props.currentTab] }
                </div>
            </div>
        </main>
    );
}


export default Main;