import React from 'react';

import '../stylescripts/_about.scss';

export const About = () => (
	<div className="about">
		<div className="facts-section">
			<div className="facts">
				<div className="section">Fun Facts</div>
				<div className="facts-text">
					I play on a co-ed soccer team.  
					I have pair of cats named Luke and Leia.  
					I love playing video games.  
					I built my own gaming PC and painted it to look like Yoshi.  
					I am allergic to bananas.
				</div>
			</div>
		</div>
		<div className="passions"> 
			<div className="section">My Journey</div>
			<p className="passions-text"> 
				When I was 10, I dreamed of being a veterinarian. 
				I loved animals and figured it was the perfect job ... right up until 
				my brother told me that vets had to operate on animals. 
				So clearly that wasn't an option.
			</p>
			<p className="passions-text">
				I have loved art and drawing since my mom first put a crayon in my hand. 
				My love for video games devloped soon after. I was lucky enough to have 3 siblings, 
				it was the perfect number for games like Gauntlet: Dark Legacy. 
			</p>
			<p className="passions-text"> 
				I had a good idea of what I wanted to do with my life once I took my first 
				programming class in highschool. I had found something that combined both my love 
				for tecnology and art. People have asked me why I enjoy UI development. 
				My answer to that has always been the same: not only do I love the feeling of 
				finally figuring out a solution after  banging my head against my desk, 
				but to be able to visually see that solution right in front of me. 
				The UI is the first thing people see when they go to a site or open up an application. 
				Nobody wants to use a site that looks and functions horribly. 
				I get great satisfaction in being able to be apart of that experience for people.  
			</p>
		</div>
	</div>
);

export default About;