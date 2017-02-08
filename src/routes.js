import React from 'react';
import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';
import Work from './containers/Work';
import { IndexRedirect, Redirect, Route } from 'react-router';

const routes = (
    <Route path="/" component={ App } >
        <IndexRedirect to="home" />
        <Route path="home" component={Home} />
        <Route path="about" component={About} />
        <Route path="work" component={Work} />
        <Redirect from="*" to="home" />
    </Route>
);

export default routes;