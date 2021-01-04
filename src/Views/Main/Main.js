import React from 'react';
import './Main.css';

import TestCover from '../../hdcc/create.gif';

const Main = () => {
    return (
        <main className="main">
            <div className="main-content-wrapper">
                <div className="main-content">
                {/* <ProjectCard val={7} cover={`https://www.janeligio.com/static/media/all%20sites.91390868.gif`}/> */}
                    <ProjectCard val={7} cover={TestCover}/>
                    {/* {projects.map(p => {
                        return (<ProjectCard val={p}/>);
                    })} */}
                </div>
            </div>
        </main>
    );
}

const ProjectCard = props => {
	return (
		<div style={{backgroundImage: `url(${props.cover})`}} className="card-project">
		{/* // <div className="card-project">
		// 	<img className="object-fit-cover" src={props.cover}/> */}
			<svg width="100%" height="100%">
				<text fill="white" fontSize={20} x="20" y="20">{props.val}</text>
			</svg>
		</div>
	);
}

export default Main;