import React from 'react';
import './App.css';

/* Sections */
import Header from './components/Header';
import FavoritePictures from './components/FavoritePictures';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Interests from './components/Interests';

const border = {border:'1px solid black'};
function App() {

	return (
		<div className="App">
			<header style={border}>
				<h1>Header</h1>
			</header>
			<main className="main">
				<div style={border}>Tabs</div>
				<div style={border}>Content</div>
			</main>
		</div>
	);
}

export default App;
