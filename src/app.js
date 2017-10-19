import React from 'react';
import ReactDOM from 'react-dom'

import IndecisionApp from './components/IndecisionApp';

const Layout = () => {
  return (
    <div>
      <p>header</p>
      <p>footer</p>
    </div>
  );
}

const template = (
  <div>
    <h1>Page Title</h1>
    <h1>This is my Page</h1>
</div>
)

const rootApp = document.getElementById('app')
ReactDOM.render(<IndecisionApp />, rootApp);
