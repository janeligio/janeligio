import React from 'react';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';

import './App.sass';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Carousel />
            </main>
        </div>
    );
}

export default App;
