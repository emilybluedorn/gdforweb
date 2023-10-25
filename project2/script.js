// // Console Log

// // create a new `Date` object
// const now = new Date();

// // get the current date and time as a string
// const currentDateTime = now.toLocaleString();

// console.log(currentDateTime); // output: "7/20/2021, 2:28:15 PM" (will vary depending on your time zone)


// Actual script applied to page

function updateDateTime() {

    const now = new Date() .toDateString();

    const currentDateTime = now.toLocaleString();

    document.querySelector('#datetime').textContent = currentDateTime;

}

setInterval(updateDateTime);


