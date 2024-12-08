function fetchUserData(userId) {
    //Create a new promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userId===21) {
                resolve({id:21, name: "Radika", email:"radika@gmail.com"});
            } else {
                reject(new Error("User Not Found"));
            }
        }, 5000)
    })
}

//Consuming the promise
fetchUserData(22)
.then(userDetails => {
    console.log("User Found:", userDetails.name);
})

.catch(errorMessage => {
    console.error(errorMessage);
})
