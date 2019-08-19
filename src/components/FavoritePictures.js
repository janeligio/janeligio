import React from 'react';

import Makapuu from '../public/makapuu.jpg';
import Tastetea from '../public/tastetea.JPG';
import Charlie from '../public/charlie.JPG';
import CrouchingLion from '../public/crouchinglion.JPG';
import Hairspray from '../public/hairspray.JPG';
import Karaoke from '../public/karaoke.jpg';
import MakapuuHike from '../public/makapuuhike.PNG';
import Momi from '../public/momi.jpg';
import Pali from '../public/pali.jpg';
import PattyMills from '../public/pattymills.PNG';
import Smoking from '../public/smoking.jpg';
import Waikiki from '../public/waikiki.JPG';


const FavoritePictures = () => (
<>
        <h2 className="content-title" style={{ color: 'white', background: '#9299FB' }}>Favorite Pictures</h2>

        <div className="favorites-pics-container" style={{
            display: 'flex',
            justifyContent: 'space-around',
            margin: '1em'
        }}>
            <FavoritePicture picture={Makapuu} alt="makapuu" content={<p>hello</p>} />
            <FavoritePicture picture={Smoking} alt="makapuu" content={<p>hello</p>} />
            <FavoritePicture picture={Pali} alt="makapuu" content={<p>hello</p>} />
        </div>
        <div className="favorites-pics-container" style={{
            display: 'flex',
            justifyContent: 'space-around',
            margin: '1em'
        }}>
            <FavoritePicture picture={MakapuuHike} alt="makapuu" content={<p>hello</p>} />
            <FavoritePicture picture={Waikiki} alt="makapuu" content={<p>hello</p>} />
            <FavoritePicture picture={Charlie} alt="makapuu" content={<p>hello</p>} />
        </div>
        <div className="favorites-pics-container" style={{
            display: 'flex',
            justifyContent: 'space-around',
            margin: '1em'
        }}>
            <FavoritePicture picture={CrouchingLion} alt="makapuu" content={<p>hello</p>} />
        </div>
        <div className="favorites-pics-container" style={{
            display: 'flex',
            justifyContent: 'space-around',
            margin: '1em'
        }}>
        </div>
        <div className="favorites-pics-container" style={{
            display: 'flex',
            justifyContent: 'space-around',
            margin: '1em'
        }}>
            <FavoritePicture picture={Karaoke} alt="makapuu" content={<p>hello</p>} />
            <FavoritePicture picture={Tastetea} alt="makapuu" content={<p>hello</p>} />
        </div>
        <div className="favorites-pics-container" style={{
            display: 'flex',
            justifyContent: 'space-around',
            margin: '1em'
        }}>
            <FavoritePicture picture={Momi} alt="makapuu" content={<p>hello</p>} />
            <FavoritePicture picture={PattyMills} alt="makapuu" content={<p>hello</p>} />
            <FavoritePicture picture={Hairspray} alt="makapuu" content={<p>hello</p>} />
        </div>
</>
);

const FavoritePicture = ({picture, alt, content}) => {
	return (
		<div className="card-picture">
			<img src={picture} alt={alt}  style={{
				boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)',
			}}/>
	 	</div>		   	        
	);
};

export default FavoritePictures;