import React, { PropTypes } from 'react';
import MediaQuery from 'react-responsive';
import Header from './Header';
import Footer from './Footer';

let links = [
	{
		id: '0',
		to: '/',
		text: 'Home',
	},
	{
		id: '1',
		to: '/about',
		text: 'About Me',
	},
	{
		id: '2',
		to: '/work',
		text: 'Work',
	},
]

const location = "app";

const App = ({children}) => (
	<div className={"app app-".concat(children.props.route.path)}>
		<Header { ... { links } }/>
		{children}
		<MediaQuery minWidth={768}>
				<Footer { ... { location }}/>
		</MediaQuery>
	</div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;