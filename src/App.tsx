import React from 'react';
import Home from './pages/Home/Home';
import './App.sass';
import Header from './components/Header/Header.spec';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
        </div>
    );
}

export default App;
