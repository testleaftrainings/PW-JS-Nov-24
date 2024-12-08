//push - add one or more elements to the end of an array

const { log } = require("node:console");

let browserActions = ['Login', 'SignUp', 'UserProfile'];
browserActions.push('Check Notifications');
console.log(browserActions);

//pop - remove the last element from an array and return it
browserActions.pop();
console.log(browserActions);

//shift - remove the first element from the array
let browserNames = ["Chrome", "Edge", "Firefox", "Safari"];
browserNames.shift();
console.log(browserNames);

//unshift() - add one or more elements to the beginning of the array
browserNames.unshift("Chrome", "Opera", "Brave");
console.log(browserNames);

//slice() - extracts a section of an array without modifying the original
let cart = ['bluetooth', 'phone', 'powerbank', 'airpods', 'speakers', 'charger', 'smartwatch'];
let result = cart.slice(1,5);
console.log(result);

//splice - add or remove elements from an array
cart.splice(1,2, "laptop", "pendrive");
console.log(cart);

//Spread syntax [...array]
let numbers = [1,2,3,4];
let copiedNumbers = [...numbers];
console.log(copiedNumbers);

let array1 = [1,2];
let array2 = [3,4];
let mergedArray = [...array1, ...array2];
console.log(mergedArray);

let conacatArray = array1.concat(array2);
console.log(conacatArray);


let newNumbers = [0, ...numbers, 5];
console.log(newNumbers);

//Sorting the array
let numberArray = [6,1,5,2,7,4,10];
numberArray.sort();
console.log(numberArray);

//Numbers - compare function
let originalNumbers = [3,1,4,1,5,10];
originalNumbers.sort((a,b) => a - b);
//3,1 => 3-1 = 2 > 0
console.log(originalNumbers);

originalNumbers.forEach((num) => {
    console.log(num);
    
})

let sum = 0;
originalNumbers.forEach((number) =>{
    sum+=number;
});
console.log(sum);

//map
let squared = originalNumbers.map((num) => num*num);
console.log(squared);

//filter
let even = originalNumbers.filter((num) => num%2 === 0);
console.log(originalNumbers);
console.log(even);

//Length
let automationTools = ["Selenium", "Playwright", "Cypress"];
console.log(automationTools.length);

let filteredArray = automationTools.filter((word) => word.length>7);
console.log(filteredArray);

//join
console.log(automationTools.join('-'));

let emptyArray = [];
console.log(emptyArray.length);


let heterogeneousArray = [ 2,3,"Chrome", true, undefined, ["Selenium", 8, true]];
console.log(heterogeneousArray);
