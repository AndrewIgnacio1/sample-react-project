const app = {
    title: 'Visibility App',
    text: 'Hey. These are some details you can now see!',
    visibility: false
}

const showDetails = () => {
    app.visibility = !app.visibility;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={showDetails}>{app.visibility ? 'Hide Details' : 'Show Details'}</button>
            {app.visibility && <p>{app.text}</p>}
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
}

render();