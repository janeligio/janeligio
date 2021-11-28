import { Project } from '../../../data/ProjectData';
// import './ParallaxCard.sass';
import './ParallaxCard.css';

export default function ParallaxCard(props: Project) {
    const style = {
        background: `url(${props.cover})`,
        backgroundSize: 'cover',
    };

    let backStyles = {
        background: 'linear-gradient(45deg,  #cedce7 0%,#596a72 100%)',
    }; // Fallback-style
    if (props.colorScheme) {
        backStyles = {
            background: `linear-gradient(45deg,  #${props.colorScheme[0]} 0%,#${props.colorScheme[1]} 100%)`,
        };
    }

    return (
        <div className="card">
            <div className="card-content">
                <div className="card-front" style={style}>
                    <div className="inner">{props.name}</div>
                </div>
                <div className="card-back" style={backStyles}>
                    <div className="inner">{props.description}</div>
                </div>
            </div>
        </div>
    );
}
