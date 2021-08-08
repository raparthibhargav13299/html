// To declare variable we use let, const or var keywords
// var x = 10;
// function f1() {
//     let x = 20;
//     console.log(x);
// }
// f1();
// console.log(x);

// There are two types of DataTypes are there in JavaScript
// Primitive Types
/*
String - Sequence of characters
Number - numeric value
Boolean - true or false
Undefined - undefined value which is not defined for a variable
Null
*/
// Non Primitive Types
// Object
// Arrays

// var x = null;
// console.log(x);

// var x = 10.5;
// console.log(typeof x);

// var x = 2;

// if (x % 2 == 0) {
//     console.log('Number is even');
// } else {
//     console.log('Number is odd');
// }

// switch (x) {
//     case 1: {
//         console.log('Monday');
//         break;
//     }
//     case 2: {
//         console.log('Tuesday');
//         break;
//     }
//     case 3: {
//         console.log('Wednesday');
//         break;
//     }
//     case 4: {
//         console.log('Thursday');
//         break;
//     }
//     default: {
//         console.log('Wrong number');
//         break;
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

var x = [10, 20, 30, 40, 50];
console.log(x);

var arr = new Array(5);
arr[0] = 10;
arr[1] = 20;
console.log(arr);

var num1 = parseInt(prompt('Enter First Value', ''));
var num2 = parseInt(prompt('Enter Second Value', ''));
console.log(num1 + num2);