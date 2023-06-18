import PROJECT_DATA from '../../data/ProjectData';
import LoadingText from '../../components/LoadingText/LoadingText';
import { AiFillMail, AiFillGithub } from 'react-icons/ai';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import background from './layered-peaks-haikei.svg';

import './Home.old.sass';

export default function Home() {
    const bio =
        'My name is Jan Iverson Eligio, a Software Engineer based in Honolulu.';
    return (
        <div id="home">
            <main>
                <div
                    className="hero-container"
                    style={{
                        backgroundImage: `url(${background})`,
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="hero-content">
                        <div>
                            <h1 className="bio">
                                <LoadingText text={bio} />
                            </h1>
                        </div>
                        <div className="links">
                            <address>
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
                                </a>
                                <a
                                    className="header-link"
                                    href="mailto:inquire@janeligio.com"
                                >
                                    <AiFillMail
                                        className="mail-icon"
                                        size="2rem"
                                    />
                                </a>
                            </address>
                            <a href="#projects" className="projects-link">
                                <p>Check out my projects </p>
                                <RiArrowDownSLine size="2rem" />
                            </a>
                        </div>
                    </div>
                </div>
                <div id="projects" className="projects-section">
                    <div className="projects-container">
                        {PROJECT_DATA.map(
                            ({
                                name,
                                cover,
                                description,
                                classname,
                                technologies,
                            }) => (
                                <div
                                    className="project"
                                    style={{
                                        background: `url(${cover})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                >
                                    <div
                                        className="project-content"
                                        key={classname}
                                    >
                                        <h1 className="project-title">
                                            {name}
                                        </h1>
                                        <p className="project-description">
                                            {description.map((d) => d)}
                                        </p>
                                        <div className="project-technologies">
                                            {technologies.map((tech) => (
                                                <span>{tech}</span>
                                            ))}
                                        </div>
                                        <div className="project-actions">
                                            <Link to={`/projects/${classname}`}>
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
