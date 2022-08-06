// Chap-3: Practise Set (This Program will run only in replet)

// Q.1) WAP to print marks of a student in an object using for loop
let marks = {
  Siddhesh: 99,
  Lovish: 8,
  Monica: 4,
  Pinto: 63,
};
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
      "The marks of: " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]]
  )
}

// Q.2) WAP to print marks of a student in an object using for-in loop
console.log("\n");
for (let key in marks) {
  console.log("The Marks of " + key + " are " + marks[key])
}

// Q.3) WAP to print "try again" untill user enters the correct number
console.log("\n");
let cn = 4
let i
while (i != cn) {
  i = prompt('Enter a number: ')
  if (i != cn) {
      console.log("Try Again.")
  } else {
      console.log("You've enterd a correct number.")
  }
}

// Q.4) Write a function to remove mean of 5 number
const mean5 = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
}
console.log("The avg of 3,4,7,9,5 is: ", mean5(3, 4, 7, 9, 5))
