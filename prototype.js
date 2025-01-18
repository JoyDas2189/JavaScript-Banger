// function person (name, age) {
//     person.name = name;
//     person.age = age;

//     person.eat = function() {
//         console.log('Person eats');
//     };
//     person.sleep = function() {
//         console.log('Person sleep');
//     }

//     return person;
// }

// const joy = new person ('Joy', 24);

// console.dir(person)

// const  captain = {
//     name: 'Joy',
//     age: 24,
//     gender: 'Male'
// }

// const player = Object.create(captain);

// console.log(player);


//without prototype
// const personMethod = {
//     eat () {
//         console.log(`Person is eating`)
//     },
//     sleep () {
//         console.log('Person is sleeping');
//     },
//     play () {
//         console.log('Person is playing');
//     }
// }

// function personFunc (name, age) {
//     let person = Object.create(personMethod);
//     person.name = name;
//     person.age = age;

//     return person
// }

// const Joy = personFunc('Joy', 23)

// Joy.eat();


//prototype is nothing but a property of all function in js which points a object

// function test() {}
// console.log(test.prototype);


// function gamer (name, role) {
//     let gamerDetails = Object.create(gamer.prototype)
//     gamerDetails.name = name;
//     gamerDetails.role = role;

//     return gamerDetails;
// }

//jodi ami instanciate er somoy notun object create kori "new" keyword diye tokhon amar function e object create korte hobe na and by default js object er naam "this" diye dibe

// function newGamer (name, role) {
//     // let gamerDetails = Object.create(newGamer.prototype)
//     this.name = name;
//     this.role = role;

//     // return gamerDetails;
// }

// newGamer.prototype = {
//     frag () {
//         console.log(`${this.name} frags`);
//     },
//     die () {
//         console.log(`${this.name} dies`);
//     },
//     bait () {
//         console.log(`${this.name} baits`);   
//     }
// }

// const joy = gamer('SH1NIGAMI', 'Duelist');
// // joy.frag();

// const luffy = new newGamer('Luffytaro', 'Initiator');
// console.log(luffy.name);
// luffy.bait()


//class
class Traveller {
    constructor(name, age) {
        this.name = name;
        this.gender = age;
    }

    walk () {
        console.log(`${this.name} walks`);
    }

    run () {
        console.log(`${this.name} runs`);
    }

    rest () {
        console.log(`${this.name} rests`);
    }
}

const joy = new Traveller('Joy', 24);
joy.walk()


const persons = new Object();
console.log(Object.prototype)