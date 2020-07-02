class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer.';
        const options = ['option 1', 'option 2', 'option 3'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return this.props.options.map(option => <Option option={option} />)
    }
}

class Option extends React.Component {
    render() {
        return (
            <li key={this.props.option}>{this.props.option}</li>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <input type='text' name='option' />
                <button>Add Option</button>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));