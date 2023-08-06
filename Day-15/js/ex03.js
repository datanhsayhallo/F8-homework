var a = 1000
var b = 1500
var c = 63

document.write(`3 số ${a} - ${b} - ${c} <br/>`)

if ( a > b && a > c) {
    document.write(`Số lớn nhất: ${a}`);
    // console.log(`Số lớn nhất: ${a}`);
} else if ( b > a && b >c) {
    document.write(`Số lớn nhất: ${b}`);
    // console.log(`Số lớn nhất: ${b}`);
} else {
    document.write(`Số lớn nhất: ${c}`)
    // console.log(`Số lớn nhất: ${c}`);
}