import { Link } from 'react-router-dom';
import PROJECT_DATA, { Project } from '../../data/ProjectData';

export default function ProjectShowcase({
    customClass,
}: {
    customClass: string;
}) {
    return (
        <div className={customClass}>
            <div className="content">
                {PROJECT_DATA.map((project) => (
                    <ProjectCard
                        key={getProjectId(project)}
                        project={project}
                    />
                ))}
            </div>
        </div>
    );
}

function ProjectCard(props: { project: Project }) {
    const {
        project: { name, cover, description, classname, technologies },
    } = props;

    return (
        <div
            className="project"
            key={getProjectId(props.project)}
            id={getProjectId(props.project)}
            style={{
                background: `url(${cover})`,
                backgroundSize: 'cover',
                backgroundPositionX: 'left',
                backgroundPositionY: 'bottom',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="project-content" key={classname}>
                <h1 className="project-title">{name}</h1>
                <div className="project-body">
                    <p className="project-description">
                        {description.map((d) => d)}
                    </p>
                    <div className="project-technologies">
                        {technologies.map((tech) => (
                            <span
                                key={`${getProjectId(props.project)}-${tech}`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="project-actions">
                        <Link to={`/projects/${classname}`}>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function getProjectId(project: Project) {
    return 'project' + project.name.split(' ').join('-');
}
