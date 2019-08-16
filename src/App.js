import React from 'react';
import './App.css';
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

const border = {
	border: '1px solid black'
}
function App() {

	const favPicsStyle = {
		display:'flex', 
		alignItems:'flex-start', 
		flexWrap:'wrap',
		justifyContent:'space-around'
	};
	return (
    <div className="App">
      <header className="App-header grid">
	      <h1 style={{fontSize:"3em"}} id="myname">
	      {`<jan.io>`}
	      </h1>
	      <div style={{display:'flex', padding:'8em'}}>
	      	  <div style={{flex:1}}>
			      <img className="headshot" style={{height:150, width:150}} src={Headshot} alt="headshot"/>
		      </div>
		      <p style={{flex:1}}>Aspiring web developer.</p>
		  </div>
      </header>

      <main className="main">
		  
	  <h2 className="content-title" style={{color:'white', background:'#9299FB'}}>Favorite Pictures</h2>

      	<div id="favorite-pics" className="grid" style={{background:''}}>
			<div style={{margin:'1em',}}>
				<div className="favorites-pics-container" style={{display:'flex',flexWrap:'no-wrap'}}>
				<FavoritePicture picture={Makapuu} alt="makapuu" content={<p>hello</p>}/>
				<FavoritePicture picture={Smoking} alt="makapuu" content={<p>hello</p>}/>
				<FavoritePicture picture={Pali} alt="makapuu" content={<p>hello</p>}/>
				</div>
				<div className="favorites-pics-container" style={{display:'flex'}}>
				<FavoritePicture picture={MakapuuHike} alt="makapuu" content={<p>hello</p>}/>
				<FavoritePicture picture={Waikiki} alt="makapuu" content={<p>hello</p>}/>
				<FavoritePicture picture={Charlie} alt="makapuu" content={<p>hello</p>}/>
				</div>
				<div className="favorites-pics-container" style={{display:'flex'}}>
				<FavoritePicture picture={CrouchingLion} alt="makapuu" content={<p>hello</p>}/>
				<FavoritePicture picture={Elither_1} alt="makapuu" content={<p>hello</p>}/>
				</div>
				<div className="favorites-pics-container" style={{display:'flex'}}>
				<FavoritePicture picture={Elither_2} alt="makapuu" content={<p>hello</p>}/>
				<FavoritePicture picture={Elither_3} alt="makapuu" content={<p>hello</p>}/>
				<FavoritePicture picture={Ralph} alt="makapuu" content={<p>hello</p>}/>
				</div>
				<div className="favorites-pics-container" style={{display:'flex'}}>
				<FavoritePicture picture={Karaoke} alt="makapuu" content={<p>hello</p>}/>
				<FavoritePicture picture={Tastetea} alt="makapuu" content={<p>hello</p>}/>
				</div>
				<div className="favorites-pics-container" style={{display:'flex'}}>
				<FavoritePicture picture={Momi} alt="makapuu" content={<p>hello</p>}/>
				<FavoritePicture picture={PattyMills} alt="makapuu" content={<p>hello</p>}/>
				<FavoritePicture picture={Hairspray} alt="makapuu" content={<p>hello</p>}/>
				</div>
			</div>
	   	   </div>

	   	<Section id="projects" title="Projects"/>
	   	<Section id="resume" title="Resume"/>
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

// const FavoritePicture = ({picture, alt, content}) => {
// 	return (
// 		<div className="card-picture" style={{margin:'1em'}} id="makapuu-pic">
// 			<img style={{borderRadius:'5%'}} src={picture} alt={alt} />
// 	 	</div>		   	        
// 	);
// };
const FavoritePicture = ({picture, alt, content}) => {
	return (
		<img className="card-picture"
		 style={{borderRadius:'5%', margin: '1em'}} src={picture} alt={alt} />
	);
};
const Links = () => (
	<React.Fragment>
		  <a href="#favorite-pics" class="btn">Favorite Pictures</a>
		  <a href="#projects" class="btn">Projects</a>
		  <a href="#resume" class="btn">Resume</a>
		  <a href="#interests" class="btn">Interests</a>
	</React.Fragment>
	);

export default App;
