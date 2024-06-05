// Generics
function getValue<T>(arg: T):T{
    return arg
}

let num = getValue<number>(35)
let str = getValue<string>("Hi")

// Key of
interface Person1{
    fullname: string;
    age: number
}

type PersonKeys = keyof Person

function getProperty<T, K extends keyof T>(obj: T, key:K):T[K]{
    return obj[key]
}

let person: Person1 = {fullname: "John Doe", age:30};
let fullname = getProperty(person, "fullname");
let age = getProperty(person, "age");

// Conditional Types

interface SuccessResponse{
    status: "success",
    data: any;
}

interface ErrorResponse{
    status: "error",
    message: string
}

type APIResponse = SuccessResponse | ErrorResponse;

type ResponzeType <T extends "success" | "error"> = T extends "success" ? SuccessResponse : ErrorResponse;

function handleApiResponse<T extends "success" | "error">(status: T, response: ResponzeType<T>){
    if(status === "success"){
        console.log((response as SuccessResponse).data);
        
    }else{
        console.log((response as ErrorResponse).message);
    }
}

// Mapped types
interface User2{
    name: string;
    age: number;
}

type partialUser = {
    [P in keyof User2]: User2[P]
}

type ReadonlyUser = {
    [P in keyof User2]: Readonly<User2[P]>
}

let user3:ReadonlyUser = {
    name: "Jane Doe",
    age: 40
}

type ReadolyUser2 = Readonly<User2>

let user4:ReadolyUser2 = {
    name: "John Doe",
    age: 30
}

// user4.name = ""
user3.name = "xyz"
console.log(user3.name);

// Template Literal Types
type Color = "red" | "blue" | "green";
type Brightness = "light" | "dark";

type ColorTheme = `${Brightness}-${Color}`

let theme1:ColorTheme = "dark-red";
let theme2:ColorTheme = "light-blue";