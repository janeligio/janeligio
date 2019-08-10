import React from 'react';
import './App.css';
import Makapuu from './public/makapuu.jpg';
import Headshot from './public/janheadshot.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header grid">
	      <h1 style={{fontSize:"3em"}} id="myname">
	      {`<jan.io>`}
	      </h1>
	      <div style={{display:'flex'}}>
	      	  <div style={{flex:1}}>
			      <img className="headshot" style={{height:150, width:150}} src={Headshot} alt="headshot"/>
		      </div>
		      <p style={{flex:1}}>Aspiring web developer.</p>
		  </div>

		  <a href="#favorite-pics" class="btn">Favorite Pictures</a>
		  <a href="#projects" class="btn">Projects</a>
		  <a href="#resume" class="btn">Resume</a>
		  <a href="#interests" class="btn">Interests</a>
      </header>
      <main className="main">

      	<div id="favorite-pics" className="grid" style={{background:'#9299FB'}}>
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

export default App;
