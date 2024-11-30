/**
 * String Declaration
 * 1. String Literal
 * 2. String object
 * 
 * String literals - '', "", ``
 * let firstname = "Rajkumar";
 * let username = "Rajkumar"
 * 
 * String object 
 * let firstname = new String("Hi Rajkumar")
 * let username = new String("Hi Rajkumar")
 */
 
let literal1 = "Rajkumar";
let literal2 = "Rajkumar";
console.log(literal1===literal2);
console.log(typeof literal1);

let object1 = new String("Hi Rajkumar");
let object2 = new String("Hi Rajkumar");
console.log(object1===object2);
console.log(typeof object1);

//Escape sequence
let testType = 'It\'s a regression test';
let stringType = "Hello, this is a \"double quote\"";

//Concatenation
let testcaseName = "Create a new lead";
let testcaseId = 231;
let result = testcaseId + "-" +testcaseName+ ":passed in the last execution";
console.log(result);


//Template literal - introduced ES6
let testcases = 2400;
let output = `There are ${testcases} testcases automated in our project`;
console.log(output);
console.log(`There are ${testcases} testcases automated in our project`);


//String Methods
//How to get the count of the characters in the string?
let coursename = 'Playwright';
//length - starts from 1
//index - starts from 0
console.log(`The length of the string is ${coursename.length}`);

//Find the first character of the given string
console.log(`The first character in the string is ${coursename.charAt(0)}`);
console.log(`The second character from the last is ${coursename.charAt(coursename.length-2)}`);

//indexOf - index of the character
console.log(`The index of a is ${coursename.indexOf('a')}`);
console.log(`The index of z is ${coursename.indexOf('z')}`);
//No match = -1

//includes - true/false
coursename = "Machine Learning";
console.log(`${coursename.includes('ning')}`);
console.log(`${coursename.includes('MeL')}`);

//slice - extracts a part of the string and returns a new string
let welcomeMessage = `Welcome to Testleaf & Happy learning!`;
let outputMessage = welcomeMessage.slice(6,12);
console.log(outputMessage);

//split - split the string into array of substrings
let companyName = "Qeagle Assurance Limited";
let array = companyName.split("");
console.log(array);
console.log(typeof array);

//substring
let outputString = welcomeMessage.substring(2,15);
console.log(outputString);


//String reversal
companyName = "Testleaf";
//Output:"faeltset" 
function reverseString() {
    let chars = companyName.split("");
    console.log(chars);
    let reversed = "";
    for (let index = chars.length-1; index >= 0; index--) {
        reversed = reversed + chars[index];  
    }
    return reversed;
}
console.log(reverseString());

let originalString = "WelcomeToTestleaf";
let reverse = originalString.split("").reverse().join("");
console.log(reverse);

