import React from 'react';
import './App.css';

/* Sections */
import Header from './components/Header';
import FavoritePictures from './components/FavoritePictures';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Interests from './components/Interests';

import Headshot from './public/janheadshot.jpg';

const border = {border:'1px solid black'};

function App() {
	return (
		<div className="App">
			<header>
				<h1>Jan Iverson Eligio</h1>
				<div className="header-content">
					<img className="headshot" src={Headshot} alt="Jan Iverson Eligio's headshot."/>
					<div className="header-content-text">
						<p>2020 B.S. Computer Science graduate from UH Manoa. Aspiring software engineer.</p>
						<a className="link" href="https://github.com/janeligio">GitHub</a>
					</div>
				</div>
			</header>
			<main className="main">
				<div style={border}>Tabs</div>
				<div style={border}>Content</div>
			</main>
		</div>
	);
}

export default App;
