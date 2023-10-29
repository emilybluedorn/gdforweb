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


// button attempt -- works but only for one color not both directions

function changeClass_2() {
  var element = document.querySelector("#blue");
  element.removeAttribute("class");
  element.classList.add('cls-2');
}

function changeClass_3() {
  var element = document.querySelector("#blue");
  element.removeAttribute("class");
  element.classList.add('cls-3');
}

function changeClass_4() {
  var element = document.querySelector("#blue");
  element.removeAttribute("class");
  element.classList.add('cls-4');
}

function changeClass_5() {
  var element = document.querySelector("#blue");
  element.removeAttribute("class");
  element.classList.add('cls-5');
}

// /* 0. define button*/
// var button = document.querySelector("#color").find('button');

// /* 
//   when button is clicked:
//     1. detect the data-number attribute of the clicked button 
//     2. set the value of the attribute as a variable 
//     3. print the variable as the part of class name like below 
// */
 
//  element.classList.add('cls-' + number);



