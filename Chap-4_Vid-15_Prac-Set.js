// Chap-4: Practise Set

// Q.1) What will the following- 'console.log("har\"".length) in js
console.log('har"'.length); // Ans: 4

// Q.2) Explore the includes, 'startswith' and 'endswith' functions of a string
const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";
console.log(sentence.includes(word));

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
// expected output: "The word "fox" is in the sentence"

// Q.3) WAP in js to convert a given string to lowercase
let fruit = "APPLE";
console.log(fruit.toLowerCase());

// Q.4) Extract the amount out of this string - "Please give Rs.1000"
let any = "Please give Rs.1000";
let amount = Number.parseInt(any.slice(15));
console.log(amount);
console.log(typeof amount);

// Q.5) Try to change 5th character of string- "Bhakti"
let friend = "Bhakti";
friend[5] = "j";
console.log(friend);
// No we can change any character of a string, because 'strings are immutable'.
