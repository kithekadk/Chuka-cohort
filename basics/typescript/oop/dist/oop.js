"use strict";
class Person {
    constructor(name, age, gender, nationality) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getGender() {
        return this.gender;
    }
    static getComplexture() {
        return Person.complexture;
    }
}
Person.complexture = "Black";
class Trainee extends Person {
    constructor(name, age, gender, nationality, traineeID) {
        super(name, age, gender, nationality);
        this.traineeID = traineeID;
    }
    getTraineeDetails() {
        return `Trainee ID: ${this.traineeID}, Name: ${this.getName()}, Gender: ${this.getGender()}, Nationality: ${this.nationality},`;
    }
}
let trainee1 = new Trainee("Alvin", 20, "Male", "Kenyan", 1);
console.log(trainee1);
console.log(trainee1.nationality);
console.log(Trainee.complexture);
// ABSTRACT CLASS
class Animal {
    move() {
        console.log(`${this.name} is running`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} says : Woof!`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name}`);
        console.log(`${this.name} says : Meow!`);
    }
}
let dog = new Dog("Bosco");
dog.makeSound();
let cat = new Cat("Catt");
cat.makeSound();
class Car {
    constructor(brand, name, topspeed, fuel) {
        this.brand = brand;
        this.name = name;
        this.topspeed = topspeed;
        this.fuel = fuel;
    }
    getTopSpeed() {
        this.brand = "BMW";
        console.log(`The ${this.brand} ${this.name} has a topspeed of ${this.topspeed}`);
    }
}
let car1 = new Car("Audi", "A6", "260", "Petrol");
car1.getTopSpeed();
