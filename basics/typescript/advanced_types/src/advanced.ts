// Intersection Type
interface Person{
    name: string
}

interface Trainee{
    traineeId: number
}

type ChukaTrainee = Person & Trainee;

const trainee: ChukaTrainee = {
    traineeId: 1,
    name: "John"
}

// Type Guards
// type of

function printId(id: number | string){
    if(typeof id === "string"){
        console.log(id.toUpperCase());
    }else{
        console.log(id);
    }
}

printId("Four")
printId(4)

// In
interface Fish{
    swim: () => void
}

interface Cow{
    walk: () => void
}

function move(animal: Fish | Cow){
    if("swim" in animal){
        animal.swim()
    }else{
        animal.walk()
    }
}

// instance of
class Dog{
    bark(){
        console.log("Woof");  
    }
}

class Horse{
    neigh(){
        console.log("Neigh");
    }
}

function maKeSound(animal: Dog | Horse){
    if(animal instanceof Dog){
        animal.bark()
    }else{
        animal.neigh()
    }
}

let dog1 = new Dog()

maKeSound(dog1)

// Discrimated Union type
interface Square{
    name: "square";
    size: number
}

interface Rectangle{
    name: "rectangle";
    width: number;
    length: number 
}

interface Circle {
    name: "circle";
    radius: number
}

type Shape = Square | Rectangle | Circle

function area(shape: Shape){
    switch(shape.name){
        case "square":
            return shape.size * shape.size;
        case "rectangle":
            return shape.width * shape.length;
        case "circle":
            return Math.PI * shape.radius ** 2
    }
}


let mySquare:Square = {
    name: "square",
    size: 5
}

let myRect:Rectangle = {
    name: "rectangle",
    width: 5,
    length: 8
}

let myCircle:Circle = {
    name: "circle",
    radius: 7
}
console.log(area(mySquare));
console.log(area(myRect));
console.log(area(myCircle));

// Type casting
let form = document.querySelector('.calc_form') as HTMLFormElement;
let num1 = document.querySelector('#num1') as HTMLInputElement;
let num2 = document.querySelector<HTMLInputElement>('#num2');
let calc_btn = document.querySelector<HTMLButtonElement>('#btn-calculate')

form.addEventListener("submit", (e)=>{
    e.preventDefault()
})

// OpTIONAL CHAINING
interface User{
    name: string;
    address:{
        street?: string;
        city: string
    }
}

let user:User = {name: "Jane doe", address:{
    city: "Nairobi"
}}

//null coalescing
let value;

let defaultValue = null;

let final = "Final";

let result = value ?? defaultValue ?? "Default"

console.log(result);
