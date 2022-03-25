import { Link, useParams } from 'react-router-dom';
import PROJECT_DATA from '../../data/ProjectData';
import { IoIosArrowForward } from 'react-icons/io';
import './Project.sass';

export default function About() {
    const { projectName }: any = useParams();
    const project = PROJECT_DATA.find(
        (project) => project.classname === projectName
    );

    return (
        <div id="project">
            <main>
                <div className="container">
                    <ul className="breadcrumb">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <IoIosArrowForward />
                        <li>
                            {' '}
                            <Link to="/#projects">Projects</Link>
                        </li>
                        <IoIosArrowForward />
                        <li>{project?.name}</li>
                    </ul>
                    <h1>{project?.name}</h1>
                    <div className="technologies">
                        <ul>
                            {project?.technologies.map((technology) => (
                                <li>{technology}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="links">
                        <ul>
                            {project?.links.map((link) => (
                                <li>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="description">
                        <p>{project?.description}</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
