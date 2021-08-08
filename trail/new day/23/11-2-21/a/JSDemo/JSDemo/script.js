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

// var x = [10, 20, 30, 40, 50];
// console.log(x);

// var arr = new Array(5);
// arr[0] = 10;
// arr[1] = 20;
// console.log(arr);

// var num1 = parseInt(prompt('Enter First Value', ''));
// var num2 = parseInt(prompt('Enter Second Value', ''));
// console.log(num1 + num2);

// // Function with old syntax
// function f1() {
//     console.log('Hello World');
// }
// f1();

// // Function with ES6 Syntax
// const f2 = () => {
//     console.log('Welcome to JavaScript');
// }
// f2();

// const sayHello = (username, city) => {
//     // console.log('Hello ' + username + ', You lives in ' + city);
//     console.log(`Hello ${username}, You lives in ${city}`);
// }

// const x = 10;
// const y = 20;
// console.log(`The sum is ${x + y}`);

// sayHello('Dhiraj', 'New Delhi');

// const Cube = (num) => {
//     return num * num * num;
// }

// const result = Cube(5);
// console.log(result);

// const Factorial = (num) => {
//     let fact = 1;
//     for (i = 1; i <= num; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }

// console.log(Factorial(5));

// var countries = ['India', 'Australia', 'England'];
// for (let i = 0; i < countries.length; i++) {
//     console.log(countries[i]);
// }

// countries.forEach((value, index) => {
//     console.log(`${index}. ${value}`);
// });

// countries.map((value) => {
//     console.log(value);
// });

// countries.push('Japan');
// console.log(countries);

// const x = countries.pop();
// console.log(x);
// console.log(countries);

// countries.unshift('USA');
// console.log(countries);

// countries.splice(2, 1, 'Russia');
// console.log(countries);

// var person = {
//     name: 'John',
//     age: 25,
//     city: 'Mumbai',
//     show() {
//         console.log(this.name);
//     }
// }

// console.log(person.name);
// person.show();

// var products = [
//     {
//         name: 'Laptop',
//         brand: 'Dell',
//         price: 32000
//     },
//     {
//         name: 'Tablet',
//         brand: 'Lenovo',
//         price: 12000
//     },
//     {
//         name: 'Camera',
//         brand: 'Nikon',
//         price: 24000
//     },
//     {
//         name: 'Speakers',
//         brand: 'Boat',
//         price: 1200
//     }
// ]

// products.map(p => {
//     console.log(p.name);
// });

// const prd = products.filter(p => p.price > 20000);

// prd.map(p => {
//     console.log(p.name);
// });

// var result = products.sort((a, b) => {
//     if (a.price < b.price) {
//         return 1;
//     }
//     else {
//         return -1;
//     }
// });

// console.log(result);

// var num = [20, 12, 56, 17, 30];
// var sum = 0;
// for (let i = 0; i < num.length; i++) {
//     sum = sum + num[i];
// }
// console.log(sum);

// var result = num.reduce((sum, num) => {
//     return sum + num;
// });

// console.log(result);

// var num = [[10, 20, 30], [40, 50], [1, 2, 3, 4]];
// console.log(num);

// var result = num.reduce((a, b) => {
//     return a.concat(b);
// });

// console.log(result);

// var num1 = [10, 20, 30];
// var num2 = [1, 2, 3];
// // var arr = num1.concat(num2);
// // console.log(arr);
// arr = [...num1,...num2];
// console.log(arr);

