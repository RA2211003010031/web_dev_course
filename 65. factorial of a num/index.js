// factorial of a number using reduce method and for loop

let num = prompt("Enter the number: ")
let fact = 1

for(i = 2; i<=num; i++) {
    fact = fact * i
}

console.log(`Factorial of ${num} using for loop : ${fact}`)

