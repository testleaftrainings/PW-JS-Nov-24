//Type inference
/**
 * 1. Implicit type inference - when the TS compiler is able to infer the datatype on its own from the value
 * that the user assigns
 * 2. Explicit type inference
 */

//Implicit type inference
let num = 42;
let message = "Hello";

function add(a:number, b:number) {
    return a+b;
}

let isActive = true;

//Explicit type inference = Type Annotation
let statusCode:number = 200;
console.log(statusCode);

let isTSInteresting:boolean = true;
