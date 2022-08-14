// Map, Filter and Reduce in js
let arr = [45, 23, 21];
console.log(arr);

// map function basically creates a new array by performing some operations on each element of an array.
let a = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value + index;
});
console.log(a);
// Foreach loop is only used when we have to do some operation on each element of an Array. Whereas Map is used to do some operation and also to create a new array out of those operated elements.

console.log("\n");

let arr1 = [45, 23, 51, 0, 3, 5];
let a2 = arr1.filter((a) => {
  return a < 10;
});
console.log(a2);

console.log("\n");

arr2 = [1,2,3,4,1,2]
let newarr2 = arr2.reduce((h1, h2)=>{
    return h1 + h2
})
console.log(newarr2)
