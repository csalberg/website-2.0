import React, { PropTypes } from 'react';
import MediaQuery from 'react-responsive';
import { compose, withState, withHandlers  } from 'recompose';
import Menu from '../components/Menu';
import { Link } from 'react-router';

import avatar from '../images/avatar.svg';

import '../stylescripts/_header.scss';
import '../stylescripts/_sidemenu.scss';

const enhance = compose(
    withState('maybeRender', 'toggleMenu', false),
    withHandlers({
        toggleOn: props => () => props.toggleMenu(true),
        toggleOff: props => () => props.toggleMenu(false),
    })
)

export const Header = enhance(({ maybeRender, toggleOn, toggleOff, links }) =>
        <div className="header">
            <img className="avatar" src={avatar} />
            <MediaQuery maxWidth={1024}>
                {matches => matches ? (
                    <div>
                        <i className="menu material-icons" onClick={ toggleOn }>menu</i>
                        { maybeRender ?
                            <div>
                                <div className="overlay" onClick={ toggleOff }/>
                                <div className="sidemenu">
                                    <i className="menu material-icons" onClick={ toggleOff }>close</i>
                                    <ul>
                                        {links.map(link => <li className="list-item"key={ link.id }><Link to={ link.to } onClick={ toggleOff }> { link.text } </Link></li>)}
                                    </ul>
                                </div>
                            </div>
                            : null}
                    </div>
                ) : (
                    <Menu { ... { links } } />
                )}
            </MediaQuery>
        </div>
);

 Header.PropTypes = {
 	links: PropTypes.array.isRequired,
 }

export default Header;