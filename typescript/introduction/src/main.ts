let middlename:string = "David";
let lastname:string = 'Joe';
let fullname:string = `${middlename} ${lastname}`

let trainees = ["Alvin", "Ivan", "Glen"]

trainees.push("Emmanuel")

let isTall:boolean = true;
isTall = false

let firstname:undefined;

middlename = "John"

console.log(firstname);

let mean:number = 5.9

//Object type
let user:object;

user = {
    name: "Stanley",
    address: "Chuka"
}

let user2:{name: string, age: number, height: string} = {
    name: "Marvin",
    age: 20,
    height: "5'9"
}
 

//ARRAY TYPE
let users:string[] = ["Eric", "Felix"]
let numbers:number[] = [1, 2, 3]
let users3:{name:string, age:number}[] = [
    {
        name: "Peter",
        age:10
    },
    {
        name: "Naomi",
        age:10
    },
    {
        name: "Charity",
        age:10
    },
]
    
//Tuple

let tuple: [string, number, boolean] = ["Hi", 20, false]

//Enum
enum Direction{
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Left;

console.log(move);


//Union type

let age: string | number;

age = "30";
age = 50


//Literal types

let size: "big" | "medium" | "small"

size = "medium"
size = "big"
size = "small"

// Type aliases
type stringOrNumber = string | number;

let username:stringOrNumber = "Carolyne"
let userage:stringOrNumber = 40

// function types

function add(num1:number, num2:number):number{
    let result = num1+num2;
    return result
}

let multiply = function(a:number, b:number):number{
    return a*b
}

let result = multiply(3, 2)

const divide = (x:number, y:number):number=>{
    return x/y;
}

divide(6, 2)

let lab:any =  false
lab = 4

let value:unknown;

value = 32;
// value = 'Hi there'
// value =true
console.log( typeof value);

if(typeof(value) === "string"){
    console.log(value.toUpperCase)
}else if(typeof value === "number"){
    console.log(value);
}

// Adding configurations
// We add --watch to the command 