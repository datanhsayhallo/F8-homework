var a = 4, b = 6, c =3
// var a = prompt("Enter number 1: ")
// var b = prompt("Enter number 2: ")
// var c = prompt("Enter number 3: ")
var temp

document.write(`Before sorting: ${a} - ${b} - ${c} <br/>`);



if(a > b ) {
    temp = b 
    b = a 
    a = temp 
} 
if ( a > c ) {
    temp = c 
    c = a 
    a = temp
}
 if ( b > c) {
    temp = c
    c = b
    b = temp
} 
document.write(`After sorting: ${a} - ${b} - ${c} `);

/*
Cho em hỏi ở đây 1 chút ạ
Nếu em sử dụng prompt để nhập số vào
var a = prompt("Enter number 1: ")
var b = prompt("Enter number 2: ")
var b = prompt("Enter number 3: ")

sau đó chạy phần code ở dưới
ví dụ
khi nhập vào number 1 = 45
             number 2 = 100
             number 3 = 78
output After softing là 100 - 45 -78
tại sao khi làm theo cách nhập vào như trên lại không sort theo thứ tự như đã khai báo a b c sẵn có mà lại hiển thị như kia ạ? 
kể cả khi em khai báo const hay let cũng đều như vậy ạ
anh An giải thích giúp em với ạ! em cảm ơn  
*/





