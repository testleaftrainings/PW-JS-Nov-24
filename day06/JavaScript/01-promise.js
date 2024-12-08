let orderPhone = new Promise((resolve, reject) => {
    let isDelivered = false; //Simulate whether the delivery is successful
    if(isDelivered) {
        resolve("Your phone has been delivered!");
    } else {
        reject("Sorry, we couldn't deliver your phone");
    }
})

//Using the promise
orderPhone
    .then(message => {
        console.log(message);   //This runs if the promise is fulfilled        
    })

    .catch(error => {
        console.log(error);     //This runs if the promise is rejected    
    })