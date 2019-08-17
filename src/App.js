import React from 'react';
import './App.css';
import { CSSTransition } from "react-transition-group";
import _ from 'lodash';

import Makapuu from './public/makapuu.jpg';
import Headshot from './public/janheadshot.jpg';
import Tastetea from './public/tastetea.JPG';
import Charlie from './public/charlie.JPG';
import CrouchingLion from './public/crouchinglion.JPG';
import Elither_1 from './public/elither1.PNG';
import Elither_2 from './public/elither2.PNG';
import Elither_3 from './public/elither3.PNG';
import Hairspray from './public/hairspray.JPG';
import Karaoke from './public/karaoke.jpg';
import MakapuuHike from './public/makapuuhike.PNG';
import Momi from './public/momi.jpg';
import Pali from './public/pali.jpg';
import PattyMills from './public/pattymills.PNG';
import Ralph from './public/ralph.PNG';
import Smoking from './public/smoking.jpg';
import Waikiki from './public/waikiki.JPG';

import hdcc1 from './hdccproject_gifs/all sites.gif';
import hdcc2 from './hdccproject_gifs/network.gif';
import hdcc3 from './hdccproject_gifs/create.gif';
import hdcc4 from './hdccproject_gifs/all sites printing.gif';

import { 
	FaGithub, 
	FaStar, 
	FaStarHalfAlt, 
	FaLinkedin,
	FaInstagram } from 'react-icons/fa';
import {MdExpandMore, MdExpandLess} from 'react-icons/md';

const border = {
	border: '1px solid black'
}
function App() {
	const [showHDCC, setShowHDCC] = React.useState(false);
	const [showJobMelon, setShowJobMelon] = React.useState(false);
	const [showShooots, setShowShooots] = React.useState(false);
	const [showTasteTea, setShowTasteTea] = React.useState(false);

	const favPicsStyle = {
		display:'flex', 
		alignItems:'flex-start', 
		flexWrap:'wrap',
		justifyContent:'space-around'
	};
	return (
    <div className="App">
      <header style={{height:'100%'}} className="App-header grid">
	      <h1 style={{fontSize:"3em"}} id="myname">
	      {`<jan.io>`}
	      </h1>
	      <div style={{display:'flex', paddingTop:'3em'}}>
	      	  <div style={{flex:1}}>
			      <img className="headshot" style={{height:150, width:150}} src={Headshot} alt="headshot"/>
		      </div>
		      <p style={{flex:1}}>Aspiring web developer.</p>
		  </div>
		  <div style={{display:'flex', justifyContent:'center', paddingBottom:'3em'}}>
			<Link link="https://github.com/janeligio" title={<FaGithub size="2em"/>}/> 
			<Link link="https://www.linkedin.com/in/jan-iverson-eligio-4a7756146/" title={<FaLinkedin size="2em" color="#0077B5"/>}/> 
			<Link link="https://www.instagram.com/_jan_da_man_/" title={<FaInstagram size="2em" color="#c32aa3"/>}/>
		  </div>
      </header>

      <main className="main">
		  
	  <h2 className="content-title" style={{color:'white', background:'#9299FB'}}>Favorite Pictures</h2>

				<div className="favorites-pics-container" style={{
					display:'flex',
					justifyContent:'space-around', 
					margin:'1em'
				}}>
				<FavoritePicture picture={Makapuu} alt="makapuu" content={<p>hello</p>}/>
				<FavoritePicture picture={Smoking} alt="makapuu" content={<p>hello</p>}/>
				<FavoritePicture picture={Pali} alt="makapuu" content={<p>hello</p>}/>
				</div>
				<div className="favorites-pics-container" style={{
					display:'flex',
					justifyContent:'space-around',
					margin:'1em'
				}}>
				<FavoritePicture picture={MakapuuHike} alt="makapuu" content={<p>hello</p>}/>
				<FavoritePicture picture={Waikiki} alt="makapuu" content={<p>hello</p>}/>
				<FavoritePicture picture={Charlie} alt="makapuu" content={<p>hello</p>}/>
				</div>
				<div className="favorites-pics-container" style={{
					display:'flex',
					
					justifyContent:'space-around',
					margin:'1em'
				}}>
				<FavoritePicture picture={CrouchingLion} alt="makapuu" content={<p>hello</p>}/>
				<FavoritePicture picture={Elither_1} alt="makapuu" content={<p>hello</p>}/>
				</div>
				<div className="favorites-pics-container" style={{
					display:'flex',
					justifyContent:'space-around',
					margin:'1em'
				}}>
				<FavoritePicture picture={Elither_2} alt="makapuu" content={<p>hello</p>}/>
				<FavoritePicture picture={Elither_3} alt="makapuu" content={<p>hello</p>}/>
				<FavoritePicture picture={Ralph} alt="makapuu" content={<p>hello</p>}/>
				</div>
				<div className="favorites-pics-container" style={{
					display:'flex',
					justifyContent:'space-around',
					margin:'1em'
				}}>
				<FavoritePicture picture={Karaoke} alt="makapuu" content={<p>hello</p>}/>
				<FavoritePicture picture={Tastetea} alt="makapuu" content={<p>hello</p>}/>
				</div>
				<div className="favorites-pics-container" style={{
					display:'flex',
					justifyContent:'space-around',
					margin:'1em'
				}}>
				<FavoritePicture picture={Momi} alt="makapuu" content={<p>hello</p>}/>
				<FavoritePicture picture={PattyMills} alt="makapuu" content={<p>hello</p>}/>
				<FavoritePicture picture={Hairspray} alt="makapuu" content={<p>hello</p>}/>
				</div>
	   	<Section id="projects" title="Projects"/>
		<div style={{
			display:'flex',
			flexDirection:'column',
			alignItems: 'center'
		}}>

			<h3>HDCC Job Sites</h3>
			<p>MongoDB, ExpressJS, React, Node</p>
				<div>
					<Link link="https://github.com/janeligio/hdccproject" title={<FaGithub size="2em"/>}/>
				</div>
			<CSSTransition
			in={showHDCC}
			timeout={0}
			classNames="list-transition"
			unmountOnExit
			appear
      		  >
			<>
			<ProjectGif gif={hdcc1} alt="HDCC All Sites"/>
			<ProjectGif gif={hdcc2} alt="HDCC All Sites"/>
			<ProjectGif gif={hdcc3} alt="HDCC All Sites"/>
			<ProjectGif gif={hdcc4} alt="HDCC All Sites"/>
			</>
			</CSSTransition>
			{!showHDCC 
			? 	<MdExpandMore size='2em' onClick={() => setShowHDCC(!showHDCC)}/>
			:   <MdExpandLess size='2em' onClick={() => setShowHDCC(!showHDCC)}/>
			}

			<h3>Job Melon</h3>
			<p>MongoDB, ExpressJS, React, Redux, Node</p>
				<div>
					<Link link="https://github.com/janeligio/jobmelon" title={<FaGithub size="2em"/>}/>
				</div>
			<CSSTransition
			in={showJobMelon}
			timeout={0}
			classNames="list-transition"
			unmountOnExit
			appear
      		  >
			<>
			<p>TODO</p>
			</>
			</CSSTransition>
			{!showJobMelon
			? 	<MdExpandMore size='2em' onClick={() => setShowJobMelon(!showJobMelon)}/>
			:   <MdExpandLess size='2em' onClick={() => setShowJobMelon(!showJobMelon)}/>
			}
			
			<h3>Shooots</h3>
			<p>MeteorJS, MongoDB</p>
				<div>
					<Link link="https://github.com/shooots/shooots" title={<FaGithub size="2em"/>}/>
				</div>
			<CSSTransition
			in={showShooots}
			timeout={0}
			classNames="list-transition"
			unmountOnExit
			appear
      		  >
			<>
			<p>TODO</p>
			</>
			</CSSTransition>
			{!showShooots
			? 	<MdExpandMore size='2em' onClick={() => setShowShooots(!showShooots)}/>
			:   <MdExpandLess size='2em' onClick={() => setShowShooots(!showShooots)}/>
			}		</div>
	   	<Section id="resume" title="Resume"/>
		<div style={{
			padding:'2em'
		}}>
			<div style={{
				display:'flex',
				flexDirection:'column',
				margin:'1em 0'
			}}>
				<h3 style={{padding:0}}>Jan Iverson Eligio</h3>
				<p style={{padding:0}}>Honolulu, HI</p>
				<p style={{padding:0}}>jeligio808@gmail.com</p>
			</div>
			<div style={{
				margin:'1em 0'
			}}>
				<h4 style={{margin:0}}>Education</h4>
				<p style={{padding:0}}>University of Hawaii at Manoa, Spring 2020</p>
			</div>
			<div style={{
				margin:'1em 0'
			}}>
				<h4>Skills</h4>
				<ul style={{listStyleType:'none'}}>
				<li>JavaScript/ES6 <Rating rating={4}/></li>
				<li>React <Rating rating={4}/></li>
				<li>HTML <Rating rating={3}/></li>
				<li>CSS <Rating rating={3}/></li>
				<li>Git <Rating rating={2}/></li>
				<li>C <Rating rating={3}/></li>
				<li>C++ <Rating rating={2}/></li>
				</ul>
			</div>
			<div style={{
				margin:'1em 0'
			}}>
				<h4>Experience</h4>
				<h5>Taste Tea</h5>
				<h5>Web App developer</h5>
				<h5>Hawaiian Dreding Construction Co.</h5>
			</div>
		</div>

	   	<Section id="interests" title="Interests"/>
	   	<Section id="favorite-movies" title="Favorite Movies"/>
    </main>
    </div>
  );
}

const Section = ({id, title, content}) => (
      	<div id={ id } className="grid">
      	  <div className="content-wrap">
      	  	<h2 className="content-title">{ title }</h2>
      	  	{ content }
      	  </div>
      	</div>
);

const Rating = ({rating}) => {
	const isFloat = rating % 1 !== 0;
	let elements = []
	_.times(Math.trunc(rating), 
		() => elements = [...elements, <FaStar size="1em"/>]);
	return (
		<>
		{
			elements.map(el => el)
		}
		{ isFloat && <FaStarHalfAlt size="1em"/>}
		</>
	)
}

// const FavoritePicture = ({picture, alt, content}) => {
// 	return (
// 		<div className="card-picture" style={{margin:'1em'}} id="makapuu-pic">
// 			<img style={{borderRadius:'5%'}} src={picture} alt={alt} />
// 	 	</div>		   	        
// 	);
// };
const FavoritePicture = ({picture, alt, content}) => {
	return (
		<img className="card-picture" src={picture} alt={alt} />
	);
};

const ProjectGif = ({gif, alt, action}) => (
	<img onClick={action} style={{
		width:'60%',
		boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)',
		margin:'1em'
	}} src={gif} alt={alt}/>
);

const Link = ({link, title}) => (
	<a href={link} target="_blank" style={{
		color:"black",
		textDecoration: "none"
	}}>{title}</a>
);
const Links = () => (
	<React.Fragment>
		  <a href="#favorite-pics" class="btn">Favorite Pictures</a>
		  <a href="#projects" class="btn">Projects</a>
		  <a href="#resume" class="btn">Resume</a>
		  <a href="#interests" class="btn">Interests</a>
	</React.Fragment>
	);

export default App;
