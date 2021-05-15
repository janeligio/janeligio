import FlipCard from './FlipCard';
import data from '../../data/ProjectData';
import './Projects.css';

export default function Projects() {
    return (
        <section key={Math.random()} className="wrapper">
            <div className="cols">
                {
                    data.map(datum => <FlipCard key={Math.random()} projectData={datum}/>)
                }
            </div>
        </section>
    );
}