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

import messi1 from './interests/messi1.jpg';
import IsThisIt from './interests/isthisit.jpg';
import Freudian from './interests/freudian.jpg';
import BeforeSunrise from './interests/beforesunrise.jpg';

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
		justifyContent:'space-around', 
		margin:'1em'
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
		  <div style={{
			display:'flex', 
			justifyContent:'center', 
			paddingTop:'1em',
			paddingBottom:'3em',
			}}>
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
			<p>MeteorJS</p>
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
				<h4 style={{marginBottom:0}}>Skills</h4>
				<div style={{display:'flex', flexWrap:'wrap'}}>
				{ <RatingTable data={[
					{name: "JavaScript/ES6", rating: 4},
					{name: "React", rating: 4},
					{name: "HTML", rating: 3},
					{name: "CSS", rating: 3},
				]}/>
				}
				{ <RatingTable data={[

					{name: "Git", rating: 2},
					{name: "Java", rating: 2},
					{name: "C", rating: 3},
					{name: "C++", rating: 2}
				]}/>
				}
				</div>
			</div>
			<div style={{
				margin:'1em 0'
			}}>
			</div>
		</div>

	   	<Section id="interests" title="Interests"/>
		<div style={{
			padding:'1em',
			display:'flex',
			flexDirection:'column',
			alignItems: 'center',
		}}>
			<h3>Messi</h3>
			<div style={{width:'40%'}}>
			<img src={messi1} alt="Lionel Messi" style={{
				height: '100%',
				width: '100%',
				objectFit: 'contain',
				boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)',
			}}/>
			</div>
			<p>The best football player to grace the earth.</p>

			<h3><em>Is This It (2001)</em></h3>
			<p style={{
				paddingTop:0,
				lineHeight: '.5em',
				fontSize: '.8em'
			}}>The Strokes</p>
			<img src={IsThisIt} alt="Is This It (2001)" style={{
				width:150,
				height:150,
				boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)',
			}}/>

			<p>Perfect alternative rock album. Nostalgia.</p>

			<h3 style={{lineHeight:'.1em'}}><em>Freudian (2018)</em></h3>
			<p style={{
				paddingTop:0,
				lineHeight: '.5em',
				fontSize: '.8em'
			}}>Daniel Caesar</p>
			<img src={Freudian} alt="Freudian (2001)" style={{
				width:150,
				height:150,
				boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)',
			}}/>
			<p>Pure love. My summer 2018.</p>

			<h3><em>Before Sunrise</em></h3>
			<p style={{
				paddingTop:0,
				lineHeight: '.5em',
				fontSize: '.8em'
			}}>1995, Romance</p>
			<div style={{width:'40%'}}>
				<img src={BeforeSunrise} alt="Before Sunrise (1995)" style={{
					height: '100%',
					width: '100%',
					objectFit: 'contain',
					boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)',
				}}/>
			</div>
			<p>Authentic. Realistically poignant.</p>
		</div>
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

const Rating = ({skill, rating}) => {
	const isFloat = rating % 1 !== 0;
	let elements = []
	_.times(Math.trunc(rating), 
		() => elements = [...elements, <FaStar size="1em"/>]);
	return (
		<li style={{display:'flex'}}>
		<p style={{flex:1, width:100, border:'1px solid black'}}>{skill}</p>

		<div style={{
			flex:2,
			width: 100,
			border:'1px solid black'
			}}>
		{
			elements.map(el => el)
		}
		{ isFloat && <FaStarHalfAlt size="1em"/>}
		</div>
		</li>
	)
}

const RatingTable = ({data}) => {
	return (
		<table style={{width:'50%'}}>
			{
			data.map(skill => {
				const isFloat = skill.rating % 1 !== 0;
				let elements = [];
				_.times(Math.trunc(skill.rating), 
					() => elements = [...elements, <FaStar size=".8em"/>]);
				return (
					<tr>
						<td>{skill.name}</td>
						<td>
							{
								elements.map(el => el)
							}
							{ isFloat && <FaStarHalfAlt size=".8em"/>}	
						</td>
					</tr>
					);
			})
			}
		</table>
	);
};

const FavoritePicture = ({picture, alt, content}) => {
	return (
		<div className="card-picture">
			<img src={picture} alt={alt}  style={{
				boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)',
			}}/>
	 	</div>		   	        
	);
};
// const FavoritePicture = ({picture, alt, content}) => {
// 	return (
// 		<img className="card-picture" src={picture} alt={alt} />
// 	);
// };

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
		textDecoration: "none",
		margin:'.3em'
	}}>{title}</a>
);

export default App;
