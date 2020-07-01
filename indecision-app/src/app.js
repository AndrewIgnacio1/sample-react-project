console.log('App.js is running!');

// JSX - JavaScript XML. JavaScript Syntax Extension. Provided by React.
// Babel - JavaScript Compiler. babeljs.io
var template = <h1>Indecision App</h1>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);