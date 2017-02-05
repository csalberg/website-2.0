import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Root from './containers/Root';
import './stylescripts/_index.scss';

const rootEl = document.getElementById('root');

render(<Root/>, rootEl);