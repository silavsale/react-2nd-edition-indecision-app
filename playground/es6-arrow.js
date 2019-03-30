const user = {
    name: 'Sergiy',
    cities: ['Berlin', 'New York', 'Montreal'],
    printPlacesLived() {
        this.cities.forEach((city) => console.log(this.name + ' has lived in ' + city));
    }
};

user.printPlacesLived();
