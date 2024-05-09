// Problem Statement: 
// Write a JavaScript program to display the current day and time in the following format.

// Sample Output : 

// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


let todayDate = new Date();
let day = todayDate.getDay();
const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
console.log("TODAY IS:", days[day] + ".")


let hours = todayDate.getHours();
let minutes = todayDate.getMinutes();
let seconds = todayDate.getSeconds();

let suffix = (hours >= 12) ? "PM" : "AM";
hours = ( hours % 12) || 12 ;

if (hours === 0 && suffix === 'PM') {
    if (minutes === 0 && seconds === 0) {
        hours = 12;
        suffix = "Noon";
    }else{
        hours = 12;
        suffix = "PM"
    }
}

if (hours === 0 && suffix === 'AM') {
    if (minutes === 0 && seconds === 0) {
        hours = 12;
        suffix = "Midnight";
    }else{
        hours = 12;
        suffix = "AM";
    }
}

// different approach

if (hours === 12 && minutes === 0 && seconds === 0) {
    suffix = (suffix === 'PM') ? "Noon" : "Midnight";
}

console.log("CURRENT TIME: " + hours + ":" + minutes + ":" + seconds + " " + suffix);
