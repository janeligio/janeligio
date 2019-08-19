import React from 'react';

import Makapuu from '../public/makapuu.jpg';
import Tastetea from '../public/tastetea.JPG';
import Charlie from '../public/charlie.JPG';
import CrouchingLion from '../public/crouchinglion.JPG';
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
    <div style={{display:'flex', flexDirection:'column', paddingLeft:'3.5em'}}>
        <div className="favorites-pics-container" style={{ display: 'flex'}}>
            <FavoritePicture picture={Makapuu} alt="makapuu" />
            <FavoritePicture picture={Smoking} alt="makapuu" />
            <FavoritePicture picture={Pali} alt="makapuu" />
        </div>
        <div className="favorites-pics-container" style={{ display: 'flex'}}>
            <FavoritePicture picture={MakapuuHike} alt="makapuu" />
            <FavoritePicture picture={Waikiki} alt="makapuu" />
            <FavoritePicture picture={Charlie} alt="makapuu" />
        </div>
        <div className="favorites-pics-container" style={{ display: 'flex'}}>
            <FavoritePicture picture={CrouchingLion} alt="makapuu" />
            <FavoritePicture picture={Karaoke} alt="makapuu" />
            <FavoritePicture picture={Tastetea} alt="makapuu" />
        </div>
        <div className="favorites-pics-container" style={{ display: 'flex'}}>
            <FavoritePicture picture={Momi} alt="makapuu" />
            <FavoritePicture picture={PattyMills} alt="makapuu" />
        </div>
    </div>
</>
);

const FavoritePicture = ({picture, alt}) => {
	return (
		<div className="card-picture" style={{margin:0, width:'33%'}}>
			<img src={picture} alt={alt}/>
	 	</div>		   	        
	);
};

export default FavoritePictures;