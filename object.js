// 1. Understanding JavaScript Objects

//Using Object Literals

let person = {
    name: 'Joy',
    age: 24, 
    gender: 'Male' 
}

// console.log(person.name, person.age, person.gender);


//Using the new Object() Syntax

const person1 = new Object();
person1.name = 'joy',
person1.age = 24,
person1.gender = 'male'

// console.log(person1.name, person1.age, person1.gender);


// Using Object Constructor Function

function Person2 (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

const person2 = new Person2('Joy', 24, 'Male');

// console.log(person2.name, person2.age, person2.gender);


// Using Class Syntax 
class Person3 {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

// const person3 = new Person3 ('Joy', 24, 'Male');

// console.log(person3.name, person3.age, person3.gender);


// 2. Accessing and Modifying Object Properties

const manush = {
    name: 'Joy',
    age: 24, 
    occupation: 'Student'
}


// Dot Notation

// console.log(manush.name);

// Bracket Notation

// console.log(manush['name']);

// Adding New Properties

manush.gender = 'Male';
// console.log(manush.gender);

// Deleting Properties

delete manush.age;
// console.log(manush);



// 3. Object Methods

let joyIntro = {
    name : 'Joy',

    intro: function() {
        return `Moshi Moshi, Orewa ${this.name}. `;
    }
}

// console.log(joyIntro.intro());


// 4. Object Iteration


const person4 = {
    name: 'Joy',
    age: 24, 
    gender: 'Male'
}

// Using for...in Loop
for ( let key in person4) {
    // console.log(`${key} : ${person4[key]}`);
    
}

// Using object.keys()

for ( let key of Object.keys(person4)) {
    // console.log(`${key} : ${person4[key]}`);
    
}


for ( let key of Object.values(person4)) {
    // console.log(key);
    
}

for (let [key, value] of Object.entries(person4)) {
    // console.log(`${key} : ${value}`);
    
}

let myString = JSON.stringify(person4);
// console.log(myString);




//Class Inheritance 
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} make sound`
    }
}

class Dog extends Animal{
    speak() {
        return `${this.name} barks`;
    }
}

let dog = new Dog ('Akamaru');

// console.log(dog.speak());


// Create a class Employee with properties name, position, and salary, and add a method getDetails() that returns the employee's info.

// class Employee {
//     constructor (name, position, salary) {
//         this.name = name;
//         this.position = position;
//         this.salary = salary;
//     }

//     getDetails() {
//         return `Name is ${this.name}, Position is ${this.position}, Salary is ${this.salary}`
//     }
// }

// const employee1 = new Employee('Md. Kamal', 'Senior Developer', 50000);

// console.log(employee1.getDetails());


// Implement class inheritance where Developer extends Employee and has an additional language property.


class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getDetails() {
        return `Name is ${this.name}, Position is ${this.position}, Salary is ${this.salary}`
    }
}

class Developer extends Employee{
    constructor (name, position, salary, language) {
        super(name, position, salary);
        this.language = language;
    }

    getDetails () {
        return `Name is ${this.name}, Position is ${this.position}, Salary is ${this.salary} and Works on ${this.language} programming language`;
    }
}

const developer1 = new Developer('Md. Khairul Hossain', 'Senior Developer', 50000, 'Angular');

console.log(developer1.getDetails());
