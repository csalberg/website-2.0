import React from 'react';
import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';
import { IndexRedirect, Redirect, Route } from 'react-router';

const routes = (
    <Route path="/" component={ App } >
        <IndexRedirect to="home" />
        <Route path="home" component={Home} />
        <Route path="about" component={About} />
        <Redirect from="*" to="home" />
    </Route>
);

export default routes;