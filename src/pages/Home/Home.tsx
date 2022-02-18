import PROJECT_DATA from '../../data/ProjectData';
import LoadingText from '../../components/LoadingText/LoadingText';
import './Home.sass';

export default function Home() {
    return (
        <div id="home">
            <main>
                <div className="bio">
                    <div className="inner-container">
                        <h1>Jan Eligio</h1>
                        <h2>Software Engineer</h2>
                        <LoadingText text="I'm Jan and I'm a programmer." />
                    </div>
                </div>
                <div className="projects">
                    {/* <h3>Projects</h3> */}
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
                                {i.name}
                            </div>
                        ))}
                        <div
                            className="project hacc-2021"
                            style={{
                                backgroundColor: '#f5f5f5',
                            }}
                        >
                            HACC 2022
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
