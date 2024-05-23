// WPP_5

// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

function removeChar(string, position) {
  first = string.substring(0, position);
  second = string.substring(position + 1, string.length);

  return first, second;
}

console.log(removeChar("Experiment",3));
console.log(removeChar("Experiment", 0));
console.log(removeChar("Experiment", 5));
console.log(removeChar("Experiment", 8));
