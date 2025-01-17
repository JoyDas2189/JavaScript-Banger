// //Global Scope
// const parentVariable = 10; //parent/window variable


// //Child Scope
// function childFunction() {

//     var childVariable = 20; // whever I use var that means I am declaring a new variable inside this scope. 
//     // parentVariable = 20; // This will override the parentVariable from the parent scope.

//     console.log(`${parentVariable} from childFunction()`);

// }

// childFunction(); //child scope function call
// console.log(parentVariable); //global scope variable console.


function outsiderFunc() {
    let outsider = 'I am outsider!';

    function insiderFunc() {
        let insider = 'I am insider!';

        console.log(outsider);
        console.log(insider);
        
    }

    insiderFunc();
    console.log(outsider);
    // console.log(insider); //Uncaught ReferenceError: insider is not defined
    
}

outsiderFunc();