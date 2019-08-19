import React from 'react';

/* Interests Section */
import messi1 from '../interests/messi1.jpg';
import IsThisIt from '../interests/isthisit.jpg';
import Freudian from '../interests/freudian.jpg';
import BeforeSunrise from '../interests/beforesunrise.jpg';


const Interests = () => (
<>
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
				width:200,
				height:200,
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
				width:200,
				height:200,
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

</>
);

const Section = ({id, title, content}) => (
    <div id={ id } className="grid">
      <div className="content-wrap">
          <h2 className="content-title">{ title }</h2>
          { content }
      </div>
    </div>
);

export default Interests;