"use strict";
var _a;
const trainee = {
    traineeId: 1,
    name: "John"
};
// Type Guards
// type of
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId("Four");
printId(4);
function move(animal) {
    if ("swim" in animal) {
        animal.swim();
    }
    else {
        animal.walk();
    }
}
// instance of
class Dog {
    bark() {
        console.log("Woof");
    }
}
class Horse {
    neigh() {
        console.log("Neigh");
    }
}
function maKeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.neigh();
    }
}
let dog1 = new Dog();
maKeSound(dog1);
function area(shape) {
    switch (shape.name) {
        case "square":
            return shape.size * shape.size;
        case "rectangle":
            return shape.width * shape.length;
        case "circle":
            return Math.PI * shape.radius ** 2;
    }
}
let mySquare = {
    name: "square",
    size: 5
};
let myRect = {
    name: "rectangle",
    width: 5,
    length: 8
};
let myCircle = {
    name: "circle",
    radius: 7
};
console.log(area(mySquare));
console.log(area(myRect));
console.log(area(myCircle));
// Type casting
let form = document.querySelector('.calc_form');
let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let calc_btn = document.querySelector('#btn-calculate');
form.addEventListener("submit", (e) => {
    e.preventDefault();
});
let user = { name: "Jane doe", address: {
        city: "Nairobi"
    } };
//null coalescing
let value;
let defaultValue = null;
let final = "Final";
let result = (_a = value !== null && value !== void 0 ? value : defaultValue) !== null && _a !== void 0 ? _a : "Default";
console.log(result);
