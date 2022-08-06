// Arrays in js
let marks_class12 = [91, 82, 73, 64, null, false, "not-present"];
console.log(marks_class12);
console.log(marks_class12[0]);
console.log(marks_class12[2]);
console.log(marks_class12[5]);
console.log(marks_class12[4]);
console.log(marks_class12[9]); // will be undefined as declared index doesn't exists.
console.log("The length of above array is:", marks_class12.length);

// how to change values of any index in array
marks_class12[2] = 75;
console.log(marks_class12);

// how to add any new index with new value assigned in array
marks_class12[7] = 88;
console.log(marks_class12);

// Strings are immutable, Array's are mutable.

console.log(typeof marks_class12); // by-default array's are objects.
console.log("\n")


// Quick quiz: Print Elements of an array using for loop
let fruits = ["Mango", "Apple", "Banana", "Orange"];
for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
