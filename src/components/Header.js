import React from 'react';

import Headshot from '../public/janheadshot.jpg';
/* Icons */
import { 
	FaGithub, 
	FaLinkedin,
	FaInstagram,

} from 'react-icons/fa';


const Header = () => (
<>
        <header style={{ height: '100%' }} className="App-header grid">
            <h1 style={{ fontSize: "3em" }} id="myname">
                {`<jan.io>`}
            </h1>
            <div style={{ display: 'flex', paddingTop: '3em' }}>
                <div style={{ flex: 1 }}>
                    <img className="headshot" style={{ height: 150, width: 150 }} src={Headshot} alt="headshot" />
                </div>
                <p style={{ flex: 1 }}>Aspiring burger flipper.</p>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '1em',
                paddingBottom: '3em',
            }}>
                <Link link="https://github.com/janeligio" title={<FaGithub color="#333" size="2em" />} />
                <Link link="https://www.linkedin.com/in/jan-iverson-eligio-4a7756146/" title={<FaLinkedin size="2em" color="#0077B5" />} />
                <Link link="https://www.instagram.com/_jan_da_man_/" title={<FaInstagram size="2em" color="#c32aa3" />} />
            </div>
        </header>
</>
);

const Link = ({link, title}) => (
	<a href={link} target="_blank" style={{
		color:"#2A5DB0",
		textDecoration: "none",
		margin:'.3em',
		fontWeight:'bold'
	}}>{title}</a>
);

export default Header;