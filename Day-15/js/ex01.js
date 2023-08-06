var a = 3
var b = 6

document.write(`Before permutation: a = ${a}, b = ${b} <br/>`);

a = a + b 
b = a - b 
a = a - b 

document.write(`After permutation: a = ${a}, b = ${b}`);

