console.log("App.js is running!");

let app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

//JSX - JavaScript XML
var tamplate = (
    <div>
        <h1>App</h1>
        {(app.subtitle && <p>Subtitle: {app.subtitle}</p>)}
        <p> {(app.options && app.options.length > 0) ? app.options.length : "no options"}</p>
        {/*<p>{user.name ? user.name : "Marco"}</p>*/}
    </div>
);

let name = 'Mike'

console.log('Name', name);

var appRoot = document.getElementById('app');

ReactDOM.render(tamplate, appRoot);
