import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header.spec';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import './App.sass';

function App() {
    return (
        <Router>
            <div className="App">
                {/* <Header /> */}
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/project/:projectName">
                        <h1>Project</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
