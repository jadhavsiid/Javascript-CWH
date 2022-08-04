// Strings Properties and Methods

let names = "Siddhesh";
console.log(names.length); // Gives length of an declared string.
console.log(names.toUpperCase()); // Returns declared string in Uppercase.
console.log(names.toLowerCase()); // Returns declared string in Lowercase.
console.log(names.slice(2, 7)); // Slice String from 2nd index included till 7th index excluded.
console.log(names.slice(2)); // This is another varaint of string slicing in which string is printed completely excluding the part of string before the declared index.

let statement = "He is a good girl.";
console.log(statement.replace("girl", "boy")); // Helps in replacing one of the word in string while printing.

let name1 = "Siddhesh";
let name2 = "Naman";
console.log(name1.concat("is a friend of "), name2); // Used to Concatenate one string into another.

let friend2 = "  Raveena  ";
console.log(friend2.trim()); // Used to remove whitespaces.

// Quick Quiz: Use for-loop to print a string.
for (i = 0; i >= 5; i++) {
  let naam = "Harry";
  console.log(naam[i]);
}
