// function Bicycle(speed, gear, tirePressure) {
//     this.speed = speed;
//     this.gear = gear;
//     this.tirePressure = tirePressure;
//     this.inflateTires = function () {
//         this.tirePressure += 3;
//     }
// }
//
// let Quacycle = Bicycle;
//
// let bicycle1 = new Bicycle(40, 3, 20);
// bicycle1.inflateTires();
// console.log(bicycle1);
//
// let bicycle2 = new Bicycle(50, 12, 10);
// bicycle2.inflateTires();
// console.log(bicycle2);
//
// function Mechanic(name) {
//     this.name = name
// };
//
// // let Mechanic = (name) => this.name = name;
//
// let mike = new Mechanic('Mike');
// console.log(mike);
//
// mike.inflateTires = bicycle1.inflateTires;
// mike.inflateTires.call(bicycle1);
//
// console.log(bicycle1);
//
// function greet(){
//     console.log('Hi man')
// }
// greet()
// console.log(greet.prototype);
//
// greet
// greet.prototype

// const arr = [123, 444, 1233, 445, 6, 9, 4, 0];
//
// const newArr = arr.filter(num => num < 6);
//
// console.log(newArr);
//
const names = ["Joe", 'Alex', 'Franc', "Paul", "Mark", "Alexandr", "Fabiano"];

const toDelName = 'Franc';

const newNames = names.filter(name => name !== toDelName);

console.log(names);
console.log(newNames);

// const objPlayers = [
//     {lastName: "Ronaldo", team: "Juventus"},
//     {lastName: "Messi", team: "Barselona"},
//     {lastName: "Pedro", team: "Barselona"},
//     {lastName: "Sandro", team: "Barselona"}
// ];
// const players = objPlayers.filter(player => player.team == "Barselona");
// const playerName = players.map(player => "Player Name :" + player.lastName);
// console.log(playerName);
