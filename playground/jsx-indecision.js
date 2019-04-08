console.log('playground/jsx-indecision.js');


class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Action/>
                <Options/>
                <AddOptions/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
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
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <Option/>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option
            </div>
        );
    }
}

class AddOptions extends React.Component {
    render() {
        return (
            <div>
                <button>AddOptions</button>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
