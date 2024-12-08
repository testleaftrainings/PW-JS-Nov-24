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
let firstname:string = "Jagadeesh";
console.log(firstname);

let number: number[] = [23, 45.8, 90];

let data:any= "Message is received from the server";
data = 201;
data = true;

// let value:any;
// value = 43;
// value = "Hello";
// value.toUpperCase();

let value:unknown;
value = 43;
value = "Hello";
if(typeof value === "string") {
    console.log(value.toUpperCase());  
}

function infiniteLoop():never {
    while(true) {
        console.log("Looping forever!!");
        
    }
}