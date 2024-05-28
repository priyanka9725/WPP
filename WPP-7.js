// WPP_7

// Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

function createString(string) {
  if (string.length > 3) {
    let last3 = string.slice(-3);
    let newString = last3 + string + last3;
    return newString;
  }else {
    console.log("String length must be greater than 3");
  }
}

console.log(createString("Marvel"));
console.log(createString("Internshala"));
console.log(createString("In"));
