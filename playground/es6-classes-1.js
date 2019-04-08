console.log("es6-classes-1.js");

class Person {
    constructor(name = "Anonymous", age = 'Undefined') {
        this.name = name;
        this.age = age;
    }

    getGreetting() {
        return `Hi. I am ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

class Travelers extends Person {
    constructor(name, age, city) {
        super(name, age);
        this.city = city;
    }

    hasCity() {
        return !!this.city;
    }

    getGreetting() {
        let description = super.getGreetting();

        if (this.hasCity()) {
            description += ` I'm visiting from ${this.city}`;
        }
        return description;
    }
}

// const me = new Student("Phil Collins", 65, "Computer Science");
// console.log(me);
// console.log(me.getDescription());
//
// const other = new Student();
// console.log(other);
// console.log(other.getDescription());

const guest = new Travelers('Bear Grylls', 44, "London");
console.log(guest.getGreetting());

const otherGuest = new Travelers('Joe Cocker', 68);
console.log(otherGuest.getGreetting());

