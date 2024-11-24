/**
 * 1. Variable hoisting
 * 2. Function hoisting
 */

console.log(profileName);   
var profileName = "Sona";
console.log(profileName);

/**
 * Internally, declaration has moved to the top
 * var profileName;
 * console.log(profileName);        //undefined
 * profileName = "Sona";
 * console.log(profileName);        //Sona
 */

console.log(password);          // ReferenceError: Cannot access 'password' before initialization
let password = "crmsfa";
console.log(password);

/**
 * let password;
 * console.log(password);
 * password = 'crmsfa'
 *console.log(password); 
 */