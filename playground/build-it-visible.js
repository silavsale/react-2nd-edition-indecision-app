// babel playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch


class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.hangleToggleVisibility = this.hangleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    hangleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });

    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                {console.log(this.state.visibility)}
                <button onClick={this.hangleToggleVisibility}>
                    {this.state.visibility ? 'Hide Visibility' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <p>Hello my friend</p>
                )}
            </div>
        )
    }

}


ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));


// console.log("build-it-visible.js");
//
// const appRoot = document.getElementById('app');
// console.log(appRoot);
//
// const showText = () => {
//     if (document.getElementById("text").innerHTML === "") {
//         document.getElementById("text").innerHTML = "Hello my friend"
//         document.getElementById("buttonText").innerHTML = "Show details"
//     }
//     else if (document.getElementById("text").innerHTML.length > 0) {
//         document.getElementById("text").innerHTML = ""
//         document.getElementById("buttonText").innerHTML = "Hide details"
//     }
// };
//
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <div>
//                 <button id="buttonText" onClick={showText}>Show details</button>
//             </div>
//             <h3 id="text"></h3>
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };
//
// render();
