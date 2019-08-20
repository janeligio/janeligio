import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
import Killshots from '../public/killshots.jpg'

const pictures = [
    Makapuu, Tastetea, Charlie, CrouchingLion, Karaoke,
    MakapuuHike, Momi, Pali, PattyMills, Smoking, Waikiki, Killshots
];

const FavoritePictures = () => {
    return (
<>
    <h2 className="content-title" style={{ color: 'white', background: '#5FBDF4' }}>Favorite Pictures</h2>
    <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay useKeyboardArrows swipeable emulateTouch>
        {
            pictures.map(pic => 
            <div>
                <img src={pic} alt="Favorite"/>
           </div>    
            )
        }
    </Carousel>
</>
)};



export default FavoritePictures;