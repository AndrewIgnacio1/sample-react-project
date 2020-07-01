'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML. JavaScript Syntax Extension. Provided by React.
// Babel - JavaScript Compiler. babeljs.io
var template = React.createElement(
  'h1',
  null,
  'Indecision App'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
