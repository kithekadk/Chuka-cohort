"use strict";
function Identity(arg) {
    return arg;
}
let num1 = Identity(5);
let fname = Identity("Lincorn");
let user = Identity({
    name: "lincorn",
    age: 20
});
let car1 = Identity({
    name: "Mercedes",
    model: "G-Wagon"
});
let strings = ["A", "b", "C"];
function getMeasurement(args) {
    console.log(args.height);
    return args;
}
let partialMeasurement = {
    height: 6
};
let readonlyMeasurement = {
    height: 20,
    weight: 40,
    length: 50
};
// readonlyMeasurement.height = 25
class User {
    height;
    getHeight() {
        console.log(this.height);
        return this.height;
    }
    setHeight(val) {
        this.height = val;
    }
}
let user1 = new User();
user1.setHeight(20);
user1.getHeight();
let user2 = new User();
user2.setHeight("6 Feet");
user2.getHeight();
function getValues(arg1, arg2, arg3) {
    console.log(arg1);
    console.log(arg2);
}
getValues("String", 35, undefined);
