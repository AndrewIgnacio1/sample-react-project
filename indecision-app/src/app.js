console.log('App.js is running!');

// JSX - JavaScript XML. JavaScript Syntax Extension. Provided by React.
// Babel - JavaScript Compiler. babeljs.io

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: [
    ]
}

// preventDefault stops it from doing a full page refresh
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    renderIndecisionApp();
};

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? 'Here are your options' : 'No options'}
            <ol>{
                app.options.map(option => <li key={option}>{option}</li>)
            }</ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>  
    );
    
    ReactDOM.render(template, document.getElementById('app'));
}

renderIndecisionApp();