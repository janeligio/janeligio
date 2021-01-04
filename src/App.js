import React, { useState } from 'react';
import './App.css';

import Header from './Views/Header/Header.js';
import Navigation from './Views/Navigation/Navigation.js';
import Main from './Views/Main/Main.js';

function App() {
	const [ currentTab, setCurrentTab ] = useState('Projects');
	return (
		<div className="App">
			<Header/>
			<Navigation currentTab={currentTab} setCurrentTab={setCurrentTab}/>
			<Main currentTab={currentTab}/>
		</div>
	);
}


export default App;
