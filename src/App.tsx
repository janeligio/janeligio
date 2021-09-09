import React from 'react';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Projects from './components/Projects/Projects';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Info />
                <section className="projects-header">
                    <h1>Projects</h1>
                </section>
                <Projects />
            </main>
        </div>
    );
}

export default App;
