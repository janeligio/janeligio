import { LoadingText } from '../Info/Info';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Slides } from '../Slides/Slides';
import './Hero.sass';

export default function Hero({
    changeSlide,
}: {
    changeSlide: (index: Slides) => void;
}) {
    const text =
        "I'm Jan and I'm a programmer. \n JavaScript ace. React enthusiast.";

    return (
        <div id="hero">
            <div className="hero-section">
                <h1>Software Engineer</h1>
                <LoadingText text={text} />
                <div className="actions">
                    <button
                        className="slides-btn"
                        onClick={() => changeSlide(Slides.Showcase)}
                    >
                        Projects
                    </button>
                    <AiOutlineArrowRight size="1.25rem" />
                </div>
                <div className="actions">
                    <button
                        className="slides-btn"
                        onClick={() => changeSlide(Slides.Contact)}
                    >
                        Contact Me!
                    </button>
                    <AiOutlineArrowRight size="1.25rem" />
                </div>
            </div>
        </div>
    );
}
