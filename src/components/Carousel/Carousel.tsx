import { useState } from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import SlidesComponents, { Slides } from '../Slides/Slides';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.sass';

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const updateCurrentSlide = (index: number) => {
        if (currentSlide !== index) {
            setCurrentSlide(index);
        }
    };

    const changeSlide = (index: Slides) => {
        if (index < 0 || index >= SlidesComponents.length) {
            return;
        }
        setCurrentSlide(index);
    };

    const opts = {
        autoPlay: false,
        selectedItem: currentSlide,
        onChange: updateCurrentSlide,
        emulateTouch: true,
        showThumbs: false,
        showArrows: false, // Show left and right arrows
        showStatus: false,
        isFinite: true,
        useKeyboardArrows: true,
    };

    return (
        <ReactCarousel {...opts}>
            {SlidesComponents.map((SlideComponent, index) => (
                <SlideComponent key={index} changeSlide={changeSlide} />
            ))}
        </ReactCarousel>
    );
}
