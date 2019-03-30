function Bicycle(speed, gear, tirePressure) {
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = function () {
        this.tirePressure += 3;
    }
}

let Quacycle = Bicycle;

let bicycle1 = new Bicycle(40, 3, 20);
bicycle1.inflateTires();
console.log(bicycle1);

let bicycle2 = new Bicycle(50, 12, 10);
bicycle2.inflateTires();
console.log(bicycle2);

function Mechanic(name) {
    this.name = name
};

// let Mechanic = (name) => this.name = name;

let mike = new Mechanic('Mike');
console.log(mike);

mike.inflateTires = bicycle1.inflateTires;
mike.inflateTires.call(bicycle1);

console.log(bicycle1);

function greet(){
    console.log('Hi man')
}
greet()
console.log(greet.prototype);

greet
greet.prototype
