// <div className="col" onTouchStart={() => this.classList.toggle('hover')}>
import { useState } from 'react';
import './FlipCard.css';

export default function FlipCard(props: any) {
    const { name, description, cover, technologies, links, colorScheme } =
        props.projectData;
    const [hover, setHover] = useState(false);

    const handleTouch = (e: any) => {
        e.preventDefault();
        setHover(!hover);
        console.log('Hovered');
    };
    let backStyles = {
        background: 'linear-gradient(45deg,  #cedce7 0%,#596a72 100%)',
    }; // Fallback-style
    if (colorScheme) {
        backStyles = {
            background: `linear-gradient(45deg,  #${colorScheme[0]} 0%,#${colorScheme[1]} 100%)`,
        };
    }

    return (
        <div className="col" onTouchStart={handleTouch}>
            <div className={`container ${hover ? 'hover' : ''}`}>
                <div
                    className="front"
                    style={{
                        background: `url(${cover})`,
                        backgroundSize: 'cover',
                    }}
                >
                    <div className="inner">
                        <p>{name}</p>
                        <span>{technologies.join(', ')}</span>
                    </div>
                </div>
                <div className="back" style={backStyles}>
                    <div className="inner">
                        {description.map((paragraph: string) => (
                            <p key={Math.random()}>{paragraph}</p>
                        ))}
                        <p className="project-links">
                            {links.map((link: any) => (
                                <ProjectLink
                                    key={link.href}
                                    link={link.href}
                                    name={link.name}
                                />
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectLink(props: any) {
    const { link, name } = props;
    const [hover, setHover] = useState(false);
    const handleHover = () => setHover(!hover);
    return (
        <a
            className={`project-link ${hover && 'hover'}`}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            {name}
        </a>
    );
}
