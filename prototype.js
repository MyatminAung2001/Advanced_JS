/**
 * Prototypal inheritance and the prototype chain
 * 
 * ES6 introduced classes which is the modern way to construct objects
 */

// Object literals
const person = {
    alive: true
};

const musician = {
    plays: true
};

// JS has getPrototypeOf and setPrototypeOf methods instead of using __proto__
Object.setPrototypeOf(musician, person);

console.log(Object.getPrototypeOf(musician));
console.log(musician.__proto__);
console.log(Object.getPrototypeOf(musician) === musician.__proto__); // true

console.log(musician.plays); // true
// missing property => go to person
console.log(musician.alive); // true

// extending the prototype chain
const guitarist = {
    name: "Jimmy",
    __proto__: musician
};

console.log("plays:" , guitarist.plays); // true
console.log("alive:", guitarist.alive); // true
console.log("name:", guitarist.name);
console.log("guitarist", guitarist);

/**
 * No circular references allowed
 * 
 * The __proto__ value must be an object or null
 * 
 * An object can only directly inherit from one object
 */

// object with getter and setter methods
const car = {
    doors: 2,
    model: "dodge challenger",
    get typeOfCar() {
        return this.type;
    },
    set typeOfCar(type) {
        this.model = type;
    }
};

const luxuryCar = {};

Object.setPrototypeOf(luxuryCar, car);
console.log("doors", luxuryCar.doors);
luxuryCar.model = "gtr";
console.log("model", luxuryCar.model);

// getting the keys of an object
console.log(Object.keys(luxuryCar));

// using forEach to loop keys
Object.keys(luxuryCar).forEach(key => {
    console.log("keys", key);
})

// but for..in loop includes inherit props
for(let key in luxuryCar) {
    console.log("keys", key);
}

// Object instructors
function Animal(species) {
    this.species = species;
    this.eats = true;
};

Animal.prototype.walks = function() {
    return `A ${this.species} is walking`;
};

const Dog = new Animal("Dog");

console.log(Dog.species);
console.log(Dog.walks());

// prototype property is where inheritable props and methods are
console.log(Dog.__proto__);
console.log(Dog.__proto__ === Animal.prototype); // true

// ES6 classes inheritance
class vehicle {
    constructor () {
        this.wheels = 4;
        this.motorized = true
    };

    ready() {
        return "Ready to go!"
    }
};

class Motorcycle extends vehicle {
    constructor() {
        super();
        this.wheels = 2;
    };

    wheelie() {
        return "Ohh, it has 2 wheels"
    }
};

const myBike = new Motorcycle();
console.log("myBike:", myBike);
console.log("myBike:", myBike.wheels);
console.log("myBike:", myBike.ready());
console.log("myBike:", myBike.wheelie());