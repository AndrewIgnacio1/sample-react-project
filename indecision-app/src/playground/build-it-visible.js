class VisibilityApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleVisibilityToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        const title = 'Visibility';
        const text = 'Hey. These are some details you can now see!';
        return (
            <div>
                <h1>{title}</h1>
                <button onClick={this.handleVisibilityToggle}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && <p>{text}</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityApp />, document.getElementById('app'));


// const app = {
//     title: 'Visibility App',
//     text: 'Hey. These are some details you can now see!',
//     visibility: false
// }

// const showDetails = () => {
//     app.visibility = !app.visibility;
//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={showDetails}>{app.visibility ? 'Hide Details' : 'Show Details'}</button>
//             {app.visibility && <p>{app.text}</p>}
//         </div>
//     );

//     ReactDOM.render(template, document.getElementById('app'));
// }

// render();