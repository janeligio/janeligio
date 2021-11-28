import Hero from "../Hero/Hero";
import Showcase from "../Showcase/Showcase";
import Contact from "../Contact/Contact";

export enum Slides {
    Hero = 0,
    Showcase = 1,
    Contact = 2,
}

const SlidesComponents = [Hero, Showcase, Contact];

export default SlidesComponents;