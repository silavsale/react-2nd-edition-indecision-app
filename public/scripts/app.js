"use strict";

// babel playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,rea
// ct --watch
console.log("build-it-visible.js");

var appRoot = document.getElementById('app');
console.log(appRoot);

var showText = function showText() {
    if (document.getElementById("text").innerHTML === "") {
        document.getElementById("text").innerHTML = "Hello my friend";
        document.getElementById("buttonText").innerHTML = "Show details";
    } else if (document.getElementById("text").innerHTML.length > 0) {
        document.getElementById("text").innerHTML = "";
        document.getElementById("buttonText").innerHTML = "Hide details";
    }
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "div",
            null,
            React.createElement(
                "button",
                { id: "buttonText", onClick: showText },
                "Show details"
            )
        ),
        React.createElement("h3", { id: "text" })
    );
    ReactDOM.render(template, appRoot);
};

render();
