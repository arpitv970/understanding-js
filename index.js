// functions in JS
// works on DRY principle
// DRY: Don't Repeat Yourself

function avg(a, b) {
    return (a + b)/2;
}

c = avg(4, 9);
// console.log(c);

// Conditional Statement
var age = 34;
if (age > 18) {
    // console.log('You are an Adult!')
}
else {
    // console.log('You are not an Adult!');
}

// Loops in JS
var arr = [1, 2, 3, 4, 5];
// console.log(arr);

// 1st way to iterate through array
/*
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
*/

// 2nd way to iterate through array
/*
arr.forEach(function(element) {
    console.log(element);
})
*/

// 3rd way to iterate through array
/*
let j = 0 
while(j < arr.length) {
    console.log(arr[j]);
    j++;
}
*/

// Array methods
let myArr = ["Fan", "Me", 23, null, true];
// console.log(arr.length)
myArr.pop();
myArr.push("Arpit Uchiha");
// myArr.shift();
myArr.unshift("Gojo");
// console.log(myArr);

// TODO: discover more array methods on internet

// String methods
let myStr = "Hello World!";
// console.log(myStr.length);
// console.log(myStr.indexOf("Hello"));
// console.log(myStr.lastIndexOf("Hello"));
// console.log(myStr.slice(0, 7));
d = myStr.replace("World", "Arpit")
// console.log(d, myStr)

// Dates in JS
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// JS DOM manipulation
let elem = document.getElementById('click');
// console.log(elem)

let elemClass = document.getElementsByClassName('container');
// console.log(elemClass)
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// Selecting using Query
// sel = document.querySelector('.container');
// console.log(sel)
// sel = document.querySelectorAll('.container');
// console.log(sel)

// Events in JS
// function clicked() {
//     console.log("The button was clicked")
// }

// firstContainer.addEventListener('click', function() {
//     console.log('clicked!!')
// });

// firstContainer.addEventListener('mouseover', function() {
//     document.querySelectorAll('.container')[0].innerHTML = 'Hovered!!'
//     console.log('Mouse Hovered!!')
// });

// firstContainer.addEventListener('mouseout', function() {
//     document.querySelectorAll('.container')[0].innerHTML = 'Welcome to JS Tutorial'
//     console.log('Mouse Out!!')
// });

// firstContainer.addEventListener('mouseup', function() {
//     console.log('Mouse Up!!')
// });

// firstContainer.addEventListener('mousedown', function() {
//     console.log('Mouse Down!!')
// });

// Arrow Functions
// function sum(a, b) {    // normal function
//     return a + b;
// }

sum = (a, b) => {       // Arrow Function
    return a + b;
}

login = (a, b) => {
    document.querySelectorAll('.container')[0].innerHTML = 'Set Timeout'
    console.log('Logged In!')
}

logout = (a, b) => {
    document.querySelectorAll('.container')[0].innerHTML = 'Hovered!!'
    console.log('Logged Out!!')
}
// Set Timeout Set Interval
// setTimeout(login, 2000)
// clr = setInterval(logout, 2000)
// NOTE: use clearTimeout/clearInterval to cancel respective task

// JS localStorage
// localStorage.setItem('name', 'Arpit');
// localStorage.removeItem('name', 'Arpit');
// console.log(localStorage.getItem('name'));
// localStorage.clear();

// JSON
obj = {
    name: "Arpit",
    roll: 201
}
jso = JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);
parsed = JSON.parse(`{"name":"Arpit","roll":201}`);
console.log(parsed);