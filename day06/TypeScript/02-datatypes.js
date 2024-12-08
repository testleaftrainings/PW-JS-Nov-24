/**
 * Datatypes
 * 1. number
 * 2. string
 * 3. boolean
 * 4. undefined
 * 5. null
 * 6. any
 * 7. unknown
 * 8. never
 */
//variableDeclaration varName:datatype = value;
var firstname = "Jagadeesh";
console.log(firstname);
var number = [23, 45.8, 90];
var data = "Message is received from the server";
data = 201;
data = true;
// let value:any;
// value = 43;
// value = "Hello";
// value.toUpperCase();
var value;
value = 43;
value = "Hello";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
