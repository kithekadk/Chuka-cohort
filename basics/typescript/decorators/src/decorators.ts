class Person{
    @Caller
    public name:string = "John Doe";

    @Caller3("Jane Doe")
    sayHi(){
        console.log(`${this.name} says Hi`);
    }
}



function Caller(target:any, key:string){
    console.log("This is a decorator");
}

function Caller2(target: Object, key:string){
    console.log(target);
    console.log(key);
}

function Caller3(user: string){
    return function(target: any, key:string){
        console.log(Object.getOwnPropertyNames(target));
        console.log(user); 
    }
}
