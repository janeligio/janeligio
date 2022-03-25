import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Slides } from '../Slides/Slides';
import './Contact.sass';

export default function Contact({
    changeSlide,
}: {
    changeSlide: (index: Slides) => void;
}) {
    return (
        <section id="contact">
            <div className="navigation">
                <NavigationButton
                    handler={() => changeSlide(Slides.About)}
                    label="About"
                    arrowDirection="left"
                />
            </div>
            <div className="content">
                <h1>Email Me</h1>
                <a className="header-link" href="mailto:inquire@janeligio.com">
                    inquire@janeligio.com
                </a>
                <h2>GitHub</h2>
                <a className="header-link" href="https://github.com/janeligio">
                    github.com/janeligio
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
