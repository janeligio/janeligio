import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
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
                    <Route path="/projects/:projectName">
                        <Project />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
