
let str = "  JavaScript is Awesome!  ";

console.log("Original String:", str);

// length
console.log("Length:", str.length); 

// toUpperCase()
console.log("Uppercase:", str.toUpperCase()); 

// toLowerCase()
console.log("Lowercase:", str.toLowerCase()); 

// charAt(index)
console.log("Character at index 5:", str.charAt(5)); 

// indexOf(substring)
console.log("First occurrence of 'a':", str.indexOf("a")); 

// lastIndexOf(substring)
console.log("Last occurrence of 'a':", str.lastIndexOf("a")); 

// includes(substring)
console.log("Contains 'Awesome':", str.includes("Awesome")); 

// startsWith(substring)
console.log("Starts with 'Java':", str.startsWith("Java")); 

// endsWith(substring)
console.log("Ends with 'Awesome!':", str.endsWith("Awesome!")); 

// substring(start, end)
console.log("Substring from index 2 to 10:", str.substring(2, 10)); 

// slice(start, end)
console.log("Slice last 8 characters:", str.slice(-8)); 

// trim()
console.log("Trimmed String:", str.trim()); 

// replace(old, new)
console.log("Replace 'JavaScript' with 'JS':", str.replace("JavaScript", "JS")); 

// replaceAll(old, new)
console.log("Replace all 'a' with '*':", str.replaceAll("a", "*")); 

// split(separator)
console.log("Split by space:", str.split(" ")); 

// repeat(n)
console.log("Repeated twice:", str.repeat(2)); 


// Reverse a string without using .reverse().
function reversingString (str) {

    let reversed = '';

    for ( let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return reversed;
}

let myStr = 'JavaScript';
// console.log(reversingString(myStr));


// Reverse a string using .reverse().
let myString = 'JavaScript';
let wantToSplit = myString.split('').reverse().join('')

// console.log(wantToSplit);



let string1 = "Hello World";
let string2 = 'Hello World';
let string3 = `Hello World`;

console.log(string1, string2, string3);


let name = 'Joy';
let intro = `Hello! This is ${name}`;

console.log(intro);



function isPalidrome (str) {
    let reversedWord = str.split('').reverse().join('');

    if( str === reversedWord) {
        return 'Palindrome'
    }else {
        return 'Not Palindrome'
    }
}

console.log(isPalidrome('madam'));  
console.log(isPalidrome('JavaScript')); 
