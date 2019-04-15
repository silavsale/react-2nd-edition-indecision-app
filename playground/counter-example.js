console.log("playground/counter-example.js");

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('count');
            const count = JSON.parse(json);
            console.log("componentDidMount");

            if (count) {
                this.setState(() => ({count}))
            }
        } catch (e) {
            //do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("component did update");
        const json = JSON.stringify(this.state.count);
        localStorage.setItem('count', json);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((valueBefore) => {
            return {
                count: valueBefore.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));
