let car1 = {
    brand : 'Audi',
    model : 'Q series',
    yom : 2024
}

class Person{
    user_name;
    user_age;
    user_height;
    user_email;
    _user_phone_number;

    #user_password
    _user_address

    constructor(name, age, height, email, phone_number){
        this.user_name = name;
        this.user_age = age;
        this.user_height = height;
        this.user_email = email;
        this._user_phone_number = phone_number
    }

    communicate(){
        console.log('Talking ...');
    }

    study(){
        console.log('Reading ...');
    }

    walk(){
        console.log('Walking ...');
    }

    eat(){
        console.log('eating');
    }

    setAddress(address){
        this._user_address = address
    }

    setPassword(password){
        this.#user_password = password
    }

    getPassword(){
        console.log(this.#user_password);
    }
}

let user1 = new Person('Salome Mwati', 10, 5, "salome@yopmail.com", "0712345678")

// user1.name = 'Salome Mwati'
// user1.age = '10'
// user1.height = '5'
// user1.email = 'salome@yopmail.com'
// user1.phone_number = '0712345678'

// console.log(user1);

let user2 = new Person('Peter', 10, 7, 'peter@yopmail.com', '0723456789')

user2.setAddress('Chuka')

user2.setPassword ('1234567890')
user2.getPassword()
// user2.name = 'Peter'
// user2.age = '10'
// user2.height = '5'
// user2.email = 'peter@yopmail.com'
// user2.phone_number = '0723345678'

console.log(user2);


// let define_name = Object.defineProperty(user2, "user_name",{
//     writable: false,
//     enumerable : false,
//     configurable: true
// })

// user2.user_name = "Earljoe"

// console.log(user2);

// let name_description = Object.getOwnPropertyDescriptor(user2, "user_name")

// for(let key in user2){
//     console.log(key);
// }

// console.log(name_description);


class Man extends Person{

    complexture;
    team;
    _user_address

    constructor(user_name,age,height, user_email, phone_number,address, complexture, team){
        super(user_name, age, height, user_email, phone_number)
        this.complexture = complexture;
        this.team = team
        this._user_address = address
    }

    study(){
        console.log('Reading again...');
    }
}

let man1 = new Man("Nimrod", "50", "6", "nimrod@yopmail.com", "0787654321", "Nyeri", "white", "Man u")

console.log(man1);
man1.study()