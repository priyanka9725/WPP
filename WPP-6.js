// WPP_6

// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

function checkNumber(num){

    if(num % 3 == 0 || num % 7 == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(checkNumber(35));
console.log(checkNumber(89));
console.log(checkNumber(16));
console.log(checkNumber(77));
console.log(checkNumber(47));
console.log(checkNumber(27));




