import React, { PropTypes } from 'react';
import MediaQuery from 'react-responsive';
import { compose, withState, withHandlers  } from 'recompose';
import Menu from '../components/Menu';
import Footer from './Footer';
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

const location = "menu";

export const Header = enhance(({ maybeRender, toggleOn, toggleOff, links }) =>
        <div className="header">
            <Link to="/" className="av-name">
                <img className="avatar" src={avatar} />
                <span className="name">Chelsey Salberg</span>
            </Link>
            <MediaQuery maxWidth={768}>
                {matches => matches ? (
                    <div>
                        <i className="menu fa fa-bars" onClick={ toggleOn }/>
                        { maybeRender ?
                            <div>
                                <div className="overlay" onClick={ toggleOff }/>
                                <div className="sidemenu">
                                    <i className="menu fa fa-times" onClick={ toggleOff }/>
                                    <ul>
                                        {links.map(link => <li className="list-item"key={ link.id }><Link to={ link.to } onClick={ toggleOff }> { link.text } </Link></li>)}
                                    </ul>
                                    <Footer { ... { location }}/>
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