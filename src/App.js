import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

/* Sections */
import Header from './components/Header';
import FavoritePictures from './components/FavoritePictures';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Interests from './components/Interests';

import Headshot from './public/janheadshot.jpg';


function App() {
	let projects = [1,2,3,4,5,6,7,8];
	return (
		<div className="App">
			<header>
				<h1>Jan Iverson Eligio</h1>
				<div className="header-content">
					<img className="headshot" src={Headshot} alt="Jan Iverson Eligio's headshot."/>
					<div className="header-content-text">
						<p>2020 B.S. Computer Science graduate from UH Manoa. Aspiring software engineer.</p>
						<a className="link-github" href="https://github.com/janeligio">GitHub</a>
					</div>
				</div>
			</header>

			<nav>
				<div className="tabs">
					<Tab name="Projects"/>
					<Tab name="Skills"/>
					<Tab name="Experience"/>
					<Tab name="Contact"/>
				</div>
			</nav>

			<main className="main">
				<div className="main-content-wrapper">
					<div className="main-content">
						<Container fluid>
							<Row>
								{projects.map(p => {
									return (<ProjectCard val={p}/>);
								})}
							</Row>
						</Container>
					</div>
				</div>
			</main>
		</div>
	);
}

const Tab = props => {
	return (
		<button className="tab">
			{props.name}
		</button>
	);
};

const ProjectCard = props => {
	return (
		<Col sm={4}>
			<h1>{props.val}</h1>
		</Col>
	);
}
export default App;
