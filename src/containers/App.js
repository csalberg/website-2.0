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
]

const App = ({children}) => (
	<div>
		<Header { ... { links } }/>
		{children}
	</div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;