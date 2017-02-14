import React, { PropTypes } from 'react';

import '../stylescripts/_card.scss';

const Card = ({title, image, link}) => (
    <div className="card-container">
        <div className="card">
        	<div className="card-image">
        		<img className="card-image" src={image} />
        	</div>
        	<div className="card-text">
        		<span>{title} - </span>
        		<a className="card-link" href={link}>
    				<i className="fa fa-github-square" />
    				<span> GitHub</span>
    			</a>
        	</div>
        </div>
    </div>
);

Card.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.node.isRequired,
    link: PropTypes.string.isRequired,
};

export default Card;