import React from 'react';
import routes from '../routes';
import { Router, browserHistory } from 'react-router';

const Root = () => (
	<Router history={ browserHistory }>
      {routes}
    </Router>
);

export default Root;