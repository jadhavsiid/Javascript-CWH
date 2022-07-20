// Chap-1: Practise Set

// Q.1) Create a variable of type string and try to add a number to it.
let a = "Siddhesh";
let b = 6;
console.log(a + b); // output will be the string concatenated with integer.

// Q.2) Use Typeof operator to find the datatype of the string in last question.
console.log(typeof (a + b));

// Q.3) Create a const object in Javascript,can you change it to hold a number later ?
const s = {
  name: "Siddhesh",
  section: 1,
  isprinccipal: false,
};
// s = 54, No, we can't change the const object variable to hold a number later it will give syntax error.

// Q.4) Try to add new key to the const object in Q.3, were you able to do it?
s["friend"] = "Vibhanshu";
console.log(s["friend"]);

s["name"] = "Swati";
console.log(s["name"]);
console.log("\n");
// Yes, we can add a new key or change a key value in an existing object.

//Q.5) WAP in Js Program to create a word-meaning dictionary of 5 words.
const dict = {
    portray:"To depict.",
    qualify:"To be eligible.",
    refused: "To Decline",
    borrow: "To Take",
    embrace: "To accept"
};
// Two ways of calling keys in an object.
console.log(dict['embrace']);
console.log(dict.refused);