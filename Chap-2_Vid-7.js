// Vid-7: Conditionals Expressions/ Statements in js (This Program will only run in replet.)
let a = prompt("Hey, What's your age ?")
a = Number.parseInt(a) // this function converts a string into number.This Process is called 'Typecasting'.

// Example of if and if-else statement.

// if (a > 0) {
//     alert('This is a valid age')
// }
// else {
//     alert('This is an invalid age')
// }

// Example of nested if-else statement.
if (a<0){
    alert('This is an Invalid Age.')
}
else if(a<9){
    alert('Oh Kiddo, Buzz of!')
}
else if(a<18 && a>=9){
    alert('Wait untill you are 18 to drive, MF.')
}
else{
    alert('Yes you are a grown a** person and can drive')
}

// Example of ternanry operator
console.log("You",a <18?"Cannot Drive": "Can Drive")

// Homework: Explore Switch Statement and write basic program.



