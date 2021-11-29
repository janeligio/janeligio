import Hero from "../Hero/Hero";
import Showcase from "../Showcase/Showcase";
import About from "../About/About";
import Contact from "../Contact/Contact";

export enum Slides {
    Hero = 0,
    Showcase = 1,
    About = 2,
    Contact = 3,
}

const SlidesComponents = [Hero, Showcase, About, Contact];

export default SlidesComponents;