// function processUserInput(callback) {
//     let name = prompt("Please enter your name");
//     callback(name);
// }

// function displayName(name) {
//     alert(`Hello ${name}`);
// } 

// //Calling the functon
// processUserInput(displayName);

function checkAvailability(movieName, callback) {
    console.log(`Checking movie name`)
    setTimeout(() => {
      console.log(`Movie ${movieName}is available`)
      callback();
    }, 2000)
  }
  
  function playMovie() {
      console.log(`Now playing the movie`)
  }
  
checkAvailability("Lord of the Rings", playMovie)