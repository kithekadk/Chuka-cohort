"use strict";
// Generics
function getValue(arg) {
    return arg;
}
let num = getValue(35);
let str = getValue("Hi");
function getProperty(obj, key) {
    return obj[key];
}
let person = { fullname: "John Doe", age: 30 };
let fullname = getProperty(person, "fullname");
let age = getProperty(person, "age");
function handleApiResponse(status, response) {
    if (status === "success") {
        console.log(response.data);
    }
    else {
        console.log(response.message);
    }
}
let user3 = {
    name: "Jane Doe",
    age: 40
};
let user4 = {
    name: "John Doe",
    age: 30
};
// user4.name = ""
user3.name = "xyz";
console.log(user3.name);
let theme1 = "dark-red";
let theme2 = "light-blue";
