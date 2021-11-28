import { Slides } from '../Slides/Slides';

export default function Contact({
    changeSlide,
}: {
    changeSlide: (index: Slides) => void;
}) {
    return (
        <section id="contact">
            <h1>Contact Page</h1>
        </section>
    );
}
