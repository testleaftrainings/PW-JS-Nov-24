//Optional Parameters

function userRegistration(fName: string, lName: string, gender: string, height?: number, age?:number) {
    console.log(`Sign up with ${fName}, ${lName}, ${age}, ${gender}, ${height}`);
}

userRegistration("Sona", "Akshatha", "female", 160);

//Default parameters
function profile(username: string, isValid: boolean, profileStatus: string = 'Available', dob?: string) {
    console.log(`Profile Details: ${username}, ${isValid}, ${profileStatus}, ${dob}`);
}

profile("Sudha", true, "Busy")