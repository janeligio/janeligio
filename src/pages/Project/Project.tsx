import { Link, useParams } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import ReactMarkdown from 'react-markdown';
import PROJECT_DATA from '../../data/ProjectData';
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
                    <h1 className="title">{project?.name}</h1>
                    <div className="description">
                        <p>{project?.description}</p>
                    </div>
                    <h4>Technologies</h4>
                    <div className="technologies">
                        <ul>
                            {project?.technologies.map((technology) => (
                                <li key={`${projectName}-${technology}`}>
                                    {technology}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <h4>Links</h4>
                    <div className="links">
                        <ul>
                            {project?.links.map((link, index) => (
                                <li key={`${projectName}-link-${index}`}>
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
                    <div className="markdown">
                        <ReactMarkdown>
                            {project?.markdown?.raw || ''}
                        </ReactMarkdown>
                    </div>
                </div>
            </main>
        </div>
    );
}
