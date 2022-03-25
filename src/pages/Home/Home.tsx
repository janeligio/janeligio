import PROJECT_DATA from '../../data/ProjectData';
import LoadingText from '../../components/LoadingText/LoadingText';
import { AiFillMail, AiFillGithub } from 'react-icons/ai';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import './Home.sass';

export default function Home() {
    return (
        <div id="home">
            <main>
                <div className="hero-container">
                    <div>
                        <h1 className="bio">
                            My name is Jan Iverson Eligio, a Software Engineer
                            based in Honolulu.
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
                                <AiFillGithub className="gh-icon" size="2rem" />
                            </a>
                            <a
                                className="header-link"
                                href="mailto:inquire@janeligio.com"
                            >
                                <AiFillMail className="mail-icon" size="2rem" />
                            </a>
                        </address>
                        <a href="#projects" className="projects-link">
                            <p>Check out my projects </p>
                            <RiArrowDownSLine size="2rem" />
                        </a>
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
                {/* <div className="bio">
                    <div className="inner-container">
                        <h1>Jan Iverson Eligio</h1>
                        <h2>Software Engineer</h2>
                        <LoadingText text="I'm Jan and I'm a programmer." />
                    </div>
                </div>
                <div className="projects">
                    <div className="projects-container">
                        {PROJECT_DATA.map((i) => (
                            <div
                                className={`project ${i.classname}`}
                                key={i.name}
                                style={{
                                    background: `url(${i.cover})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                                <h4>{i.name}</h4>
                            </div>
                        ))}
                    </div>
                </div> */}
            </main>
        </div>
    );
}
