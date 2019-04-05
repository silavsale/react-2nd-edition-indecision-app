//JSX - JavaScript XML

console.log("App.js is running!");

let count = 0;

const addOne = () => {
    count++;
    renderCountToScreen();
};

const minusOne = () => {
    count--;
    renderCountToScreen();
};

const resetOne = () => {
    count = 0;
    renderCountToScreen();
};

var appRoot = document.getElementById('app');

const renderCountToScreen = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetOne}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCountToScreen();
