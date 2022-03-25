import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Slides } from '../Slides/Slides';
import './About.sass';

export default function About({
    changeSlide,
}: {
    changeSlide: (index: Slides) => void;
}) {
    return (
        <section id="about">
            <div className="navigation">
                <NavigationButton
                    handler={() => changeSlide(Slides.Showcase)}
                    label="Showcase"
                    arrowDirection="left"
                />
                <div className="filler"></div>
                <NavigationButton
                    handler={() => changeSlide(Slides.Contact)}
                    label="Contact"
                />
            </div>
            <div className="content">
                <h1>Education</h1>
                <p>University of Hawai'i at Manoa</p>
                <p>B.S. Computer Science</p>
                <h2>Currently at</h2>
                <a className="header-link" href="https://broadside.digital">
                    Broadside Digital
                </a>
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
