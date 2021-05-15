import './Project.css';
import FlipCard from './FlipCard';
import data from '../../data/ProjectData';

export default function Project() {
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

/* <section className="project-container">
    <h2>{data.name}</h2>
    <div>
        <img className="Image" src={data.cover}/>
        <div className="project-pane">
            <p>{data.description}</p>
        </div>
    </div>
</section> */