import React from 'react';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Project from './components/Project/Project';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Info/>
        <section className="projects-header"><h1>Projects</h1></section>
        <Project/>
      </main>
    </div>
  );
}

export default App;
