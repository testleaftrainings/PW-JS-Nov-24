//Function Expression
let user = function (name) {
    console.log(`Hi ${name}`);
}
user('Renju Jose');

//Arrow Function
const welcomeMessage = () => 'Hello Bargavi';
console.log(welcomeMessage());

//Function Hoisting
//Function Declaration
//Before Hoisting
console.log(userCredentials());
function userCredentials() {
    return `Hi Muthukumar`
}

/**
 * Internally, After Hoisting
 * function userCredentials() {
    return `Hi Muthukumar`
}
    console.log(userCredentials())
 * 
 */

    //Function Expression
    console.log(sayHi);
    let sayHi = function () {
        return 'Hi'
    }

    /**
     * After Hoisting,
     * let sayHi;   
     * console.log(sayHi);
     * sayHi = function () {
     *  return 'Hi'
     * }   
     */