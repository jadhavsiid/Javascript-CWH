// Chap-2: Practise Set (This Program will run only in replet)

// Q.1) Use logical operators to find whether the age of a person lies between 10 and 20 ?
let age = prompt('Hey! Enter your age: ')
age = Number.parseInt(age)
if (age >= 10 && age <= 20) {
    console.log("Your age lies between 10 and 20.")
}
else {
    console.log("Your age doesn't lie between 10 and 20.")
}

// Q.2) Demonstrate use of Switch-case statements in Js
let age = prompt('Hey! Enter your age: ')
age = Number.parseInt(age)
switch (age) {
    case 12:
        console.log("Your age is 12")
        break
    case 13:
        console.log("Your age is 13")
        break
    case 14:
        console.log("Your age is 14")
        break
    case 15:
        console.log("Your age is 15")
        break
    default:
        console.log("Your age isn't special.")
}

// Q.3) WAP a js Program to find out whether the number is divisible by 2 and 3
let num = prompt('Enter any number: ')
num = Number.parseInt(num)
if (num%2==0 && num%3==0){
    console.log("Your number is divisible by 2 and 3.")
}
else{
    console.log("Your number isn't divisible by 2 and 3.")
}

// Q.4) WAP a js Program to find out whether the number is either divisible by 2 and 3
let num = prompt('Enter any number: ')
num = Number.parseInt(num)
if (num % 2 == 0 || num % 3 == 0) {
    console.log("Your number is divisible by 2 or 3.")
}
else {
    console.log("Your number isn't divisible by 2 or 3.")
}

// Q.5) Print "You can drive" or "You Cannot Drive" based on the age bieng greater than 18 using Ternary Operator
age = prompt('Enter your age: ')
let a = age>18? 'You can Drive.':'You Cannot Drive.'
console.log(a)