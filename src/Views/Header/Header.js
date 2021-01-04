import React from 'react';
import Headshot from '../../public/janheadshot.jpg';
import './Header.css';

const Header = () => {
    return (
      <header>
        <h1 className="name">Jan Iverson Eligio</h1>
        <div className="header-content">
            <img className="headshot" src={Headshot} alt="Jan Iverson Eligio's headshot."/>
            <div className="header-content-text">
                <p>2020 B.S. Computer Science graduate from UH Manoa. Aspiring software engineer.</p>
                <a className="link-github" href="https://github.com/janeligio">GitHub</a>
            </div>
        </div>
      </header>
    ); 
};

export default Header;