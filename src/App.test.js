import jsdom from 'jsdom';

global.document = jsdom.jsdom('');
global.window = document.defaultView;
global.navigator = window.navigator;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
