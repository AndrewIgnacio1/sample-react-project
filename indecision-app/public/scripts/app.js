'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML. JavaScript Syntax Extension. Provided by React.
// Babel - JavaScript Compiler. babeljs.io

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []

    // preventDefault stops it from doing a full page refresh
};var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    renderIndecisionApp();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var selectedOption = app.options[randomNum];
    alert(selectedOption);
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderIndecisionApp();
};

var renderIndecisionApp = function renderIndecisionApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        app.options.length > 0 ? 'Here are your options' : 'No options',
        app.options.length > 0 && React.createElement(
            'button',
            { onClick: onMakeDecision },
            'What should I do?'
        ),
        app.options.length > 0 && React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

renderIndecisionApp();
