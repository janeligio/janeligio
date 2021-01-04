import React from 'react';
import './App.css';

import Header from './Views/Header/Header.js';
import Navigation from './Views/Navigation/Navigation.js';
import Main from './Views/Main/Main.js';

function App() {
	return (
		<div className="App">
			<Header/>
			<Navigation/>
			<Main/>
		</div>
	);
}


export default App;
