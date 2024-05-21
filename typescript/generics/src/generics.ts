function Identity<T>(arg: T):T {
    return arg
}

let num1 = Identity<number>(5);

let fname = Identity<string>("Lincorn") 

let user = Identity<object>({
    name: "lincorn",
    age: 20
})

interface Car{
    name: string
    model: string
    yom?: number
}

let car1 = Identity<Car>({
    name: "Mercedes",
    model: "G-Wagon"
})

let strings : Array<string> = ["A", "b", "C"]

// Generic Constraint

interface measurement{
    height: number
    weight: number
    length: number
}

function getMeasurement<T extends measurement>(args: T){
    console.log(args.height);
    
    return args
}

let partialMeasurement: Partial<measurement> = {
    height : 6
}

let readonlyMeasurement: Readonly<measurement> = {
    height: 20,
    weight: 40,
    length: 50
}

// readonlyMeasurement.height = 25

class User<T>{
    height!: T

    getHeight():T{
        console.log(this.height);
        return this.height
    }

    setHeight(val:T){
        this.height = val
    }
}

let user1 = new User<number>()

user1.setHeight(20)

user1.getHeight()

let user2 = new User<string>()

user2.setHeight("6 Feet")

user2.getHeight()

function getValues<T, Y, X>(arg1:T, arg2:Y, arg3:X){
    console.log(arg1);
    console.log(arg2);
}

getValues<string, number, undefined>("String", 35, undefined)

