import React from 'react';
import './Main.css';
import Projects from './Sections/Projects/Projects.js';
import Skills from './Sections/Skills/Skills.js';
import Experience from './Sections/Experience/Experience.js';
import Contact from './Sections/Contact/Contact.js';

const Main = props => {

    const { currentTab, darkMode } = props;

    const Sections = {
        "Projects": <div className={`main-content ${darkMode?'dark-1':''} projects`}><Projects/></div>,
        "Skills": <div className={`main-content ${darkMode?'dark-1':''} skills`}><Skills/></div>,
        "Experience": <div className={`main-content ${darkMode?'dark-1':''} experience`}><Experience/></div>,
        "Contact": <div className={`main-content ${darkMode?'dark-1':''} contact`}><Contact/></div>
    };

    return (
        <main className={`${darkMode ? 'dark-1' : ''}`}>
            <div className={`main-content-wrapper ${darkMode ? 'dark-1' : ''}`}>
                { Sections[currentTab] }
            </div>
        </main>
    );
}


export default Main;