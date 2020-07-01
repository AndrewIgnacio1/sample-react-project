console.log('App.js is running!');

// JSX - JavaScript XML. JavaScript Syntax Extension. Provided by React.
// Babel - JavaScript Compiler. babeljs.io

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: [
        'one',
        'two'
    ]
}
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length > 0 ? 'Here are your options' : 'No options'}
        <ol>{app.options.map(option => 
            <li>{option}</li>)
        }</ol>
    </div>  
);

var user = {
    name: 'Andrew Ignacio',
    age: 30,
    location: 'Annandale'
}

function getLocation(location) {
    if (location) {
        return <p>Location: {user.location}</p>;
    };
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name.toUpperCase() : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);