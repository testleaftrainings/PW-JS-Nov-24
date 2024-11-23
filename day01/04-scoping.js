/**
 * Scoping - the level of accessibility of the variable
 * 1. Global scoping
 * 2. Function scoping
 * 3. Block level scoping
 */

var gender = 'male';          //global variable
function printGender() {
    var age = 28;               //function scoped variable
    if(gender.startsWith('female')) {
        let color = 'pink';        //block scoped variable
        console.log("She/Her");        
        console.log('The color is from inside the block ' + color);    
    } else {
        console.log("He/Him"); 
    }
    console.log(`The color is from outside the if block `+ color);
    console.log(`The age is ` + age);
}
console.log(`The gender is ` + gender);
//console.log(`The age is from outside the function block ` + age);

//To call a function
printGender();


/**
 * var - function scoped variable
 * let - block scoped variable
 * const - block scoped variable
 */
