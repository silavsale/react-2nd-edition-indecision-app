'use strict';

console.log("App.js is running!");

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

//JSX - JavaScript XML
var tamplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'App'
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        'Subtitle: ',
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        ' ',
        app.options && app.options.length > 0 ? app.options.length : "no options"
    )
);

var name = 'Mike';

console.log('Name', name);

var appRoot = document.getElementById('app');

ReactDOM.render(tamplate, appRoot);
