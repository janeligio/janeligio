import data, { Project } from '../../data/ProjectData';
import { Slides } from '../Slides/Slides';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import ParallaxCard from './ParallaxCard/ParallaxCard';
import './Showcase.sass';

export default function Showcase({
    changeSlide,
}: {
    changeSlide: (index: Slides) => void;
}) {
    return (
        <section id="showcase">
            <div className="cards">
                {data.map((project: Project) => (
                    <ParallaxCard {...project} />
                ))}{' '}
            </div>
            <div className="navigation">
                <NavigationButton
                    handler={() => changeSlide(Slides.Hero)}
                    label="Home"
                    arrowDirection="left"
                />
                <div className="filler"></div>
                <NavigationButton
                    handler={() => changeSlide(Slides.About)}
                    label="About"
                />
            </div>
        </section>
    );
}

function NavigationButton({
    handler,
    label,
    arrowDirection = 'right',
}: {
    handler: () => void;
    label: string;
    arrowDirection?: 'right' | 'left';
}) {
    const margin =
        arrowDirection === 'right'
            ? { marginRight: '1rem' }
            : { marginLeft: '1rem' };

    return (
        <div className="navigation-btn" style={margin}>
            {arrowDirection === 'left' && <AiOutlineArrowLeft />}
            <button onClick={handler}>{label}</button>
            {arrowDirection === 'right' && <AiOutlineArrowRight />}
        </div>
    );
}
