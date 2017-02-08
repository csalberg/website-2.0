import React, { PropTypes } from 'react';
import Header from './Header';

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

const App = ({children}) => (
	<div className={"app app-".concat(children.props.route.path)}>
		<Header { ... { links } }/>
		{children}
	</div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;