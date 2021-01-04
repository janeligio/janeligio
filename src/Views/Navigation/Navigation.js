import React from 'react'
import './Navigation.css';

const Navigation = () => {
    return (
			<nav>
				<div className="tabs">
					<Tab name="Projects"/>
					<Tab name="Skills"/>
					<Tab name="Experience"/>
					<Tab name="Contact"/>
				</div>
			</nav>
    );
}

const Tab = props => {
	return (
		<button className="tab">
			{props.name}
		</button>
	);
};

export default Navigation;