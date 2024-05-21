class Person{
    public name: string;
    private age: number;
    protected gender: string;
    readonly nationality: string;

    static complexture: string = "Black";

    constructor(name:string, age:number, gender: string, nationality: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }

    getName():string{
        return this.name;
    }

    private getAge():number{
        return this.age;
    }

    protected getGender():string{
        return this.gender;
    }

    static getComplexture(): string{
        return Person.complexture;
    }
}

class Trainee extends Person{
    traineeID: number;

    constructor(name:string, age:number, gender: string, nationality: string, traineeID: number){
        super(name, age, gender, nationality);
        this.traineeID = traineeID
    }

    getTraineeDetails(): string{
        return `Trainee ID: ${this.traineeID}, Name: ${this.getName()}, Gender: ${this.getGender()}, Nationality: ${this.nationality},`
    }

}

let trainee1 = new Trainee("Alvin", 20, "Male", "Kenyan", 1)

console.log(trainee1);
console.log(trainee1.nationality);

console.log(Trainee.complexture);


// ABSTRACT CLASS
abstract class Animal{
    abstract name: string;

    abstract makeSound():void;

    move(): void{
        console.log(`${this.name} is running`);
    }
}

class Dog extends Animal{
    name: string;

    constructor(name:string){
        super();
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} says : Woof!`);
    }
}

class Cat extends Animal{
    name: string;

    constructor(name:string){
        super();
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name}`);
        
        console.log(`${this.name} says : Meow!`);
    }
}


let dog = new Dog("Bosco")

dog.makeSound()

let cat = new Cat("Catt")

cat.makeSound()

// Interfaces
interface Locomotive{
    brand: string,
    name: string,
    sunroof? : boolean
    readonly topspeed: string

    getTopSpeed():void
}

interface Vehicle extends Locomotive{
    fuel: string
}

class Car implements Vehicle{
    brand!: string;
    name: string;
    topspeed: string;
    fuel: string;

    constructor(brand: string, name:string, topspeed:string, fuel: string){
        this.brand = brand;
        this.name = name;
        this.topspeed = topspeed;
        this.fuel = fuel
    }

    getTopSpeed(): void {
        this.brand = "BMW"
        console.log(`The ${this.brand} ${this.name} has a topspeed of ${this.topspeed}`); 
    }
}

let car1 = new Car("Audi", "A6", "260", "Petrol")

car1.getTopSpeed()