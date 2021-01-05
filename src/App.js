import React, { useState } from 'react';
import './App.css';

import Header from './Views/Header/Header.js';
import Navigation from './Views/Navigation/Navigation.js';
import Main from './Views/Main/Main.js';

function App() {
	const [ currentTab, setCurrentTab ] = useState('Projects');
	const [ darkMode, setDarkMode ] = useState(false);
	return (
		<div className="App">
			<Header darkMode={darkMode} setDarkMode={setDarkMode}/>
			<Navigation darkMode={darkMode} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
			<Main darkMode={darkMode} currentTab={currentTab}/>
		</div>
	);
}


export default App;
