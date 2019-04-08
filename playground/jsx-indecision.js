console.log('playground/jsx-indecision.js');

class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision";
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing three'];
        const key = 0;

        return (
            <div>
                <Header title={title} sub={subtitle}/>
                <Action/>
                <Options opt={options} key={key}/>
                <AddOptions opt={options}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.sub}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {

    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        this.props.opt.value = [];
    }

    render() {
        return (
            <div>
                {
                    this.props.opt.map((option) => <Option key={option} optionText={option}/>)
                }
                <button onClick={this.handleRemoveAll}>Remove All</button>

            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}

class AddOptions extends React.Component {
    HandleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if (option) {
            console.log(option)
            // this.opt.push(option);
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.HandleAddOption}>
                    <input type="text" name="option"/>
                    <div>
                        <button>Add Option</button>
                    </div>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
