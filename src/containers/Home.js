import React from 'react';

import skyline from '../images/skyline.svg';
import '../stylescripts/_home.scss';

export const Home = () => (
	<div className="home">
		<div className="greeting">Hi!</div>
		<div className="name">I'm Chelsey</div>
		<div className="description">I'm a UI Developer based in Seattle, Washington.
			I have a passion for frontend development and a love for design.</div>
		<img src={skyline} className="skyline"/>
	</div>
);

export default Home;