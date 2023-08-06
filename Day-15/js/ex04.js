alert("Enter 2 numbers to check!")
var a = prompt("Enter number 1: ")
var b = prompt("Enter number 2: ")

document.write(`Number 1: ${a} <br/> Number 2: ${b} <br/>`)

if( a * b > 0) {
    document.write(`Two numbers have the same sign`);
} else if ( a * b < 0) {
    document.write(`Two numbers have different sign`);
} else if ( a < 0 && a * b == 0 ) {
    document.write(`Number 1 is Negative number and number 2 is 0 `);
} else if ( a > 0 && a * b == 0 ) {
    document.write(`Number 1 is Positive number and number 2 is 0 `);
} else if ( b < 0 && a * b == 0 ) {
    document.write(`Number 2 is Negative number and number 2 is 0 `);
} else if ( b > 0 && a * b == 0 ) {
    document.write(`Number 2 is Positive number and number 2 is 0 `);
} else {
    document.write(`Both numbers are 0`);
}