// inplicit binding
// explicit binding
// new binding
// window binding

// function amarFunction(amarNaam) {
//     console.log("Amar Naam ", amarNaam);
// }
// const naam = {
//     name : 'joy',
//     age: 24
// }
// amarFunction(naam);


//Inplicit Binding.

// const amarInfo = {
//     naam: 'joy',
//     boyosh: 24,
    
//     amarIntro: function() {
//         console.log(`Amar naam ${this.naam} ar amar boyosh ${this.boyosh}`);
//     }
// }

// amarInfo.amarIntro();

//inplicit binding e first dekhte hobe kothay function call hocche. Then dekhte hobe shei function call er age kono dot notation ache kina. Jodi thake tahole sheitai holo this. (won't work for arrow function)


// function amarFunction (name, age) {
//     return {
//         name: name,
//         age: age,
//         printName: function () {
//             console.log('Name :', this.name);
//         },
//         pringAge: function() {
//             console.log('Age: ', this.age)
//         },
//         fatherName: {
//             name: 'Dilip Kumar Das',
//             pringName: function () {
//                 console.log("Father's name: ", this.name);
                
//             }
//         }
//     }
// }

// const ami = amarFunction('Joy', 24);

// ami.printName();
// ami.pringAge();
// ami.fatherName.pringName();


//Explicit Binding

let printName = function (name, hobby1, hobby2, hobby3) {
    console.log(`Name: ${this.name}, hobby 1: ${hobby1}, hobby 2: ${hobby2}, hobby 3: ${hobby3}`);
};


let joy = {
    name: 'Joy',
    age: 24
}
let hobby1 = 'Gaming'
let hobby2 = 'Coding'
let hobby3 = 'Travelling'

let hobbyList = [hobby1, hobby2, hobby3]

console.log(joy.name);

printName.call(joy, hobby1, hobby2, hobby3) // When I want to sent all hobbies one by one
printName.apply(joy, hobbyList); //When I want to sent all hobbies at once

