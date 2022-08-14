// Chap-5: Practise Set (Will only run in replet)

// Q.1) Create an Array of numbers and take input from user to add number to this array
let num = [5, 25, 35, 45]
console.log(num)
var a = prompt("Enter a number")
num.push(a)
console.log(num)
console.log("\n")

// Q.2) Keep adding numbers to the array of above question untill 0 is added to the array
let num1 = [5, 25, 35, 45]
do {
    var b = prompt("Enter a number")
    num1.push(b)
} while (b != 0)
console.log(num1)
console.log("\n")

// Q.3) Filter for numbers divisible by 10 in any Array
let arr = [30, 15, 18, 75, 22, 21, 65, 91, 103, 50, 80, 200]
let c = arr.filter((s) => {
    return s % 10 == 0
})
console.log(c)
console.log("\n")

// Q.4) Create an array of an square of a given numbers
let arr1 = [2, 3, 4, 5, 6]
let y = arr1.map((g) => {
    return g * g
})
console.log(y)
console.log("\n")

// Q.5) Use Reduce to calculate factorial of a given number from an array of first 'n' natural numbers (n bieng the number whose factorial needs to be calculated)
let arr2 = [1, 2, 3]
let n = arr2.reduce((x1, x2) => {
    return x1 * x2
})
console.log(n)
console.log("\n")