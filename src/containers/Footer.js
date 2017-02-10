import React, { PropTypes } from 'react';

import '../stylescripts/_footer.scss';

export const Footer = ({location}) => (
	<div className={"footer footer-".concat(location)}>
		<a className="footer-link" href="https://github.com/csalberg">
			<i className="fa fa-github-square" />
			<span>GitHub</span>
		</a>
		<a className="footer-link" href="https://www.linkedin.com/in/chelseysalberg">
			<i className="fa fa-linkedin-square" />		
			<span>LinkedIn</span>
		</a>
		<a className="footer-link" href="mailto:chelsey.salberg@gmail.com">
			<i className="fa fa-envelope" />		
			<span>Email</span>
		</a>
	</div>
);

 Footer.PropTypes = {
 	location: PropTypes.string.isRequired,
 }

export default Footer;