let user: {
    firstname: string,
    lastname: string,
    email: string,
    age: number,
    isActive: boolean
} = {
    firstname: "Yoga",
    lastname: "Reka",
    email: "yoga@gmail.com",
    age: 28,
    isActive: true
}

//To access the different properties, you can use the dot notation or square bracket
//objectname.property
console.log(user.firstname);
console.log(user.lastname);
console.log(user.age);
console.log(user.email);
console.log(user.isActive);

//Square brackets
let user1: {
    "first-name": string,
    lastname: string,
    email: string,
    age: number,
    isActive: boolean
} = {
    "first-name": "Yoga",
    lastname: "Reka",
    email: "yoga@gmail.com",
    age: 28,
    isActive: true
}

console.log(user1["first-name"]);

