// babel src/app.js --out-file=public/script/app.js --presets=env,react --watch

console.log("App.js is running!");

let app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAll = (e) => {
    app.options = [];
    render();
};

const removeLast = (e) => {
    app.options.pop();
    render();
};

const onMakeDecesion = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const numbers = ["Hello", "my", 'amigo', 2, 452];

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>Total of options available :{app.options.length}</p>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <ol>
                {app.options.map((option) => {
                    return <li key={option}> {option}</li>
                })}

            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <div>
                    <button>Add Option</button>
                </div>
                <div>
                    <button disabled={app.options.length === 0} onClick={onMakeDecesion}>What should i do?</button>
                </div>
                <div>
                    <button onClick={removeAll}>Remove All</button>
                </div>
                <div>
                    <button onClick={removeLast}>Remove Last</button>
                </div>
            </form>

        </div>
    );
    ReactDOM.render(template, appRoot);

};

render();
