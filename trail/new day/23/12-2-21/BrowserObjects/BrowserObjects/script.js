// Browser Objects in JavaScript
// - document
// - window
// - navigator
// - location
// - screen
// const x = document.getElementById('heading').innerHTML;
// console.log(x);

// document.getElementById('heading').innerHTML = 'Using document Object';
// const x = document.getElementById('txt1').value;
// console.log(x);

// document.getElementById('txt1').value = 'Peter';
// console.log(document.querySelector('h2').innerHTML);

// console.log(navigator.language);

// console.log(location.hostname);
// console.log(location.port);
// console.log(location.protocol);
// console.log(location.href);
// location.href='https://www.google.com';

// console.log(screen.width);
// console.log(screen.height);
// console.log(screen.availHeight);
// console.log(screen.availWidth);

// const show = () => {
//     console.log('Hello');
// }

// const Add = () => {
//     const x = parseInt(document.getElementById('txt1').value);
//     const y = parseInt(document.getElementById('txt2').value);
//     const z = x + y;
//     document.getElementById('txt3').value = z;
// }

// const changeColor = () => {
//     const colorname = document.getElementById('colorname').value;
//     document.body.style.backgroundColor = colorname;
// }

// const changeColorToRed = () => {
//     document.getElementById('heading').style.color = 'red';
// }

// const changeColorToBlack = () => {
//     document.getElementById('heading').style.color = 'black';
// }

// let i = 10;
// let interval = setInterval(() => {
//     i--;
//     document.getElementById('number').innerHTML = i;
//     if(i==0){
//         clearInterval(interval);
//     }
// }, 1000);
setInterval(() => {
    var d = new Date();
    document.getElementById('hour').innerHTML = d.getHours();
    document.getElementById('minute').innerHTML = d.getMinutes();
    document.getElementById('second').innerHTML = d.getSeconds();
}, 1000);
