"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Person {
    constructor() {
        this.name = "John Doe";
    }
    sayHi() {
        console.log(`${this.name} says Hi`);
    }
}
__decorate([
    Caller
], Person.prototype, "name", void 0);
__decorate([
    Caller3("Jane Doe")
], Person.prototype, "sayHi", null);
function Caller(target, key) {
    console.log("This is a decorator");
}
function Caller2(target, key) {
    console.log(target);
    console.log(key);
}
function Caller3(user) {
    return function (target, key) {
        console.log(Object.getOwnPropertyNames(target));
        console.log(user);
    };
}
