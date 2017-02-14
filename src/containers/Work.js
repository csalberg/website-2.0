import React from 'react';
import Card from '../components/Card';

import '../stylescripts/_work.scss';

import image from '../images/website.PNG';

const title = "Personal Website";
const link = "https://github.com/csalberg/website-2.0";

export const Work = () => (
	<div className="work">
		<div className="description">
			<span>Check out my code on </span> 
			<a className="work-link" href="https://github.com/csalberg">
				<i className="fa fa-github-square" />
				<span> GitHub</span>
			</a>
			<span>!</span>
			<span> Or view my work below. More to come soon.</span>
		</div>
		<Card { ... { title, image, link } }/>
	</div>
);

export default Work;