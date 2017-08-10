import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'file-loader?name=index.html!../example/index.html';
import 'react-toolbox/lib/commons.scss';
import Root from './root';
import registry from './lib/registry';
import './index.css';

if (process.env.NODE_ENV !== 'production') {
  require('./utils.css'); // eslint-disable-line
}

// Log the version number
console.log(`Netlify CMS version ${NETLIFY_CMS_VERSION}`);

// Create mount element dynamically
const el = document.createElement('div');
el.id = 'root';
document.body.appendChild(el);

render((
  <AppContainer>
    <Root />
  </AppContainer>
), el);

if (module.hot) {
  module.hot.accept('./root', () => { render(Root); });
}

const CMS = {};
for (const method in registry) { // eslint-disable-line
  CMS[method] = registry[method];
}

if (typeof window !== 'undefined') {
  window.CMS = CMS;
  window.createClass = window.createClass || React.createClass;
  window.h = window.h || React.createElement;
}

export default CMS;
