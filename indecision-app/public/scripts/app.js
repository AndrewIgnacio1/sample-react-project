'use strict';

var app = {
    title: 'Visibility App',
    text: 'Hey. These are some details you can now see!',
    clicked: false
};

var showDetails = function showDetails() {
    app.clicked = !app.clicked;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: showDetails },
            app.clicked ? 'Hide Details' : 'Show Details'
        ),
        app.clicked && React.createElement(
            'p',
            null,
            app.text
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

render();
