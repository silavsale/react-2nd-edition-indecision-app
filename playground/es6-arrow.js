const user = {
    name: 'Sergiy',
    cities: ['Berlin', 'New York', 'Montreal'],
    printPlacesLived() {
        this.cities.forEach((city) => console.log(this.name + ' has lived in ' + city));
    }
};

user.printPlacesLived();


const multiplier = {
    numbers: [3, 4, 5, 9],
    multiplyBy() {
        return this.numbers.map((number) => number * 2)
    }
};

console.log(multiplier.multiplyBy());
