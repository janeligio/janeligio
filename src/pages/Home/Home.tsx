import MatrixText from '../../components/MatrixText/MatrixText';
import ProjectShowcase from '../../components/ProjectShowcase/ProjectShowcase';
import { AiFillMail, AiFillGithub } from 'react-icons/ai';

import './Home.sass';

export default function Home() {
    const bio = 'Jan Iverson Eligio';
    return (
        <div id="home">
            <main>
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="bio">
                            <h1 className="name">
                                <MatrixText text={bio} offSet={1} />
                            </h1>
                            <h2 className="occupation">
                                <MatrixText
                                    text="Software Engineer"
                                    offSet={2}
                                />
                            </h2>
                            <h3 className="location">
                                <MatrixText
                                    text="Honolulu, Hawai'i"
                                    offSet={3}
                                />
                            </h3>
                            <address className="links">
                                <a
                                    className="header-link"
                                    href="https://github.com/janeligio/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiFillGithub
                                        className="gh-icon"
                                        size="2rem"
                                    />
                                    GitHub
                                </a>
                                <a
                                    className="header-link"
                                    href="mailto:inquire@janeligio.com"
                                >
                                    <AiFillMail
                                        className="mail-icon"
                                        size="2rem"
                                    />
                                    Email
                                </a>
                            </address>
                        </div>
                    </div>

                    <ProjectShowcase customClass="projects-showcase" />
                </div>
            </main>
        </div>
    );
}
