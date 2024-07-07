/*
+ -> -
* -> +
- -> /
/ -> **
*/

let random = Math.random()

console.log(random)
let a = prompt("Enter first number")
let b = prompt("Enter operation number")
let c = prompt("Enter second number")

let operator = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if(random<0.1) {
    b = operator[b]
}

alert(`Value = ${eval(`${a} ${b} ${c}`)}`)