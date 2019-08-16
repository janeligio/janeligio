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

  const MakapuuURL = './public/makapuu.jpg';
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

      	<div id="favorite-pics" className="grid" style={{background:'#9299FB'}}>
			<div style={{display:'flex', alignItems:'flex-start', flexWrap:'wrap',
			justifyContent:'space-around'
			}}>
			<FavoritePicture picture={Makapuu} alt="makapuu" content={<p>hello</p>}/>
			<FavoritePicture picture={Elither_1} alt="makapuu" content={<p>hello</p>}/>
			<FavoritePicture picture={Elither_2} alt="makapuu" content={<p>hello</p>}/>
			<FavoritePicture picture={Elither_3} alt="makapuu" content={<p>hello</p>}/>
			<FavoritePicture picture={Ralph} alt="makapuu" content={<p>hello</p>}/>
			<FavoritePicture picture={Karaoke} alt="makapuu" content={<p>hello</p>}/>
			<FavoritePicture picture={Tastetea} alt="makapuu" content={<p>hello</p>}/>
			<FavoritePicture picture={CrouchingLion} alt="makapuu" content={<p>hello</p>}/>
			<FavoritePicture picture={MakapuuHike} alt="makapuu" content={<p>hello</p>}/>
			<FavoritePicture picture={Momi} alt="makapuu" content={<p>hello</p>}/>
			<FavoritePicture picture={Pali} alt="makapuu" content={<p>hello</p>}/>
			<FavoritePicture picture={PattyMills} alt="makapuu" content={<p>hello</p>}/>
			<FavoritePicture picture={Smoking} alt="makapuu" content={<p>hello</p>}/>
			<FavoritePicture picture={Waikiki} alt="makapuu" content={<p>hello</p>}/>
			<FavoritePicture picture={Hairspray} alt="makapuu" content={<p>hello</p>}/>
			<FavoritePicture picture={Charlie} alt="makapuu" content={<p>hello</p>}/>
			</div>
		  <div className="content-wrap">
      	  	<h2 className="content-title" style={{color:'white'}}>Favorite Pictures</h2>
      	  		<ul>
      	  			<li>
      	  				<div className="card">
				 		<img className="makapuu-pic" src={Makapuu} alt="Me at makapu'u"/>
		 		   	     <div className="card-content">
			 		   	     <p>Briane took this picture.</p>
					   	     <p>We were messing around with the poses.</p>
					   	     <p>It was a pretty fun day to be honest, even if it was really hot and my hair kept
					   	     slapping my face every couple seconds.</p>
					   	 </div>
						 </div>		   	        
					</li>
      	  		</ul>
	   	    </div>
	      	 <div className="content-wrap">
      	  		<ul>
      	  			<li>
      	  				<div className="card">
				 		<img className="tastetea" src={Tastetea} alt="Photo at Taste Tea"/>
		 		   	     <div className="card-content">
						<p>In culpa esse ullamco sunt elit adipisicing ipsum do. Ea culpa ipsum elit laborum cillum. Dolore ipsum fugiat consectetur labore. Cupidatat veniam officia do sunt quis voluptate excepteur sint. Nulla dolore fugiat tempor consequat commodo aute. Velit ea eu ipsum voluptate quis cupidatat tempor qui Lorem sunt.</p>
					   	 </div>
						 </div>		   	        
					</li>
      	  		</ul>
	   	    </div>

	   	   </div>

	   	<Section id="projects" title="Projects" content={
	   		<p>test</p>
	   	}/>
	   	<Section id="resume" title="Resume" content={
	   		<p>test</p>
	   	}/>
	   	<Section id="interests" title="Interests" content={
	   		<p>test</p>
	   	}/>
	   	<Section id="favorite-movies" title="Favorite Movies" content={
	   		<p>test</p>
	   	}/>
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

const FavoritePicture = ({picture, alt, content}) => {
	return (
		<div className="card-picture" id="makapuu-pic">
			<img style={{borderTopLeftRadius:'5%',
			borderTopRightRadius:'5%'}} src={picture} alt={alt} />
		 	<div className="card-picture-content">
			{content}
			</div>
	 	</div>		   	        
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
