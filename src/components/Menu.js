import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Menu = ({links}) => (
    <ul>
        {links.map(link => <li className="list-item"key={ link.id }><Link to={ link.to }> { link.text } </Link></li>)}
    </ul>
);

Menu.propTypes = {
    links: PropTypes.array.isRequired,
};

export default Menu;