var middlename = "David";
var lastname = 'Joe';
var fullname = "".concat(middlename, " ").concat(lastname);
var trainees = ["Alvin", "Ivan", "Glen"];
trainees.push("Emmanuel");
var isTall = true;
isTall = false;
var firstname;
middlename = "John";
console.log(firstname);
var mean = 5.9;
//Object type
var user;
user = {
    name: "Stanley",
    address: "Chuka"
};
var user2 = {
    name: "Marvin",
    age: 20,
    height: "5'9"
};
//ARRAY TYPE
var users = ["Eric", "Felix"];
var numbers = [1, 2, 3];
var users3 = [
    {
        name: "Peter",
        age: 10
    },
    {
        name: "Naomi",
        age: 10
    },
    {
        name: "Charity",
        age: 10
    },
];
//Tuple
var tuple = ["Hi", 20, false];
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var move = Direction.Left;
console.log(move);
//Union type
var age;
age = "30";
age = 50;
//Literal types
var size;
size = "medium";
size = "big";
size = "small";
var username = "Carolyne";
var userage = 40;
// function types
function add(num1, num2) {
    var result = num1 + num2;
    return result;
}
var multiply = function (a, b) {
    return a * b;
};
var result = multiply(3, 2);
var divide = function (x, y) {
    return x / y;
};
divide(6, 2);
var lab = false;
lab = 4;
var value;
value = 32;
// value = 'Hi there'
// value =true
console.log(typeof value);
if (typeof (value) === "string") {
    console.log(value.toUpperCase);
}
else if (typeof value === "number") {
    console.log(value);
}
