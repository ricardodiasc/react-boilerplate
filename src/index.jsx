
import React from 'react';
import ReactDOM from 'react-dom';
import Appcls from './app';

const render = () => {
  const App = require('./app').default;
  ReactDOM.render(<App />, document.getElementById('App'));
}

render();
if (module.hot) {
  module.hot.accept(render);
}