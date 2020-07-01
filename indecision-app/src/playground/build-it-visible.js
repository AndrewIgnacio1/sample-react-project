const app = {
    title: 'Visibility App',
    text: 'Hey. These are some details you can now see!',
    clicked: false
}

const showDetails = () => {
    app.clicked = !app.clicked;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={showDetails}>{app.clicked ? 'Hide Details' : 'Show Details'}</button>
            {app.clicked && <p>{app.text}</p>}
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
}

render();