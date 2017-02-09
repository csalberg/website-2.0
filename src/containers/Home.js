import React from 'react';

import skyline from '../images/skyline.svg';
import '../stylescripts/_home.scss';

export const Home = () => (
	<div className="home">
		<div className="greeting">
			<span className="bg-opacity">Hi!</span>
		</div>
		<div className="greeting-name">
			<span className="bg-opacity">I'm Chelsey</span>
		</div>
		<div>
			<div className="description bg-opacity">I'm a UI Developer based in Seattle, Washington.
			I have a passion for frontend development and a love for design.</div>
		</div>
		<img src={skyline} className="skyline"/>
	</div>
);

export default Home;