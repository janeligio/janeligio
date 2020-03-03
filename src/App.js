import React from 'react';
import './App.css';

/* Sections */
import Header from './components/Header';
import FavoritePictures from './components/FavoritePictures';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Interests from './components/Interests';

function App() {

	return (
		<div className="App">
			<Header />
			<main className="main">
				<Projects />
				<Resume />
				{/* <Interests /> */}
				{/* <FavoritePictures /> */}
				<div className="content-title" style={{ color: 'white', background: '#3AA6E6' }}>
				</div>
			</main>
		</div>
	);
}

export default App;
