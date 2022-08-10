// Array Methods in js (Part-2)
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
delete num[2]; // delete is not an array method but an operator. This will not print the element declared and will also not affect length of that array.
console.log(num);

let num1 = [2, 4, 6, 8];
let num2 = [3, 6, 9, 12];
let num3 = [4, 8, 12, 16];
let num4 = num1.concat(num2, num3); // this will concatenate/join two arrays with an single array.
console.log(num4);

let sorty = ["s", "j", "a", "k", "h"];
sorty.sort(); // sorts elements of an array in alphabetical order.
console.log(sorty);

let compare = (a, b) => {
  return a - b;
};
let sorty1 = [25, 78, 41, 525, 236, 10];
sorty1.sort(compare); // this is an extension of sort method, when we declare compare function inside a sort method, it sorts an array into an ascending order.
console.log(sorty1);

let num5 = [1,2,3,4]
num5.reverse() // reverses the indexes of all the elements in an array.
console.log(num5)

let grp = ["Siddhesh","Bhakti","Harshada","Devendra"]
grp.splice(1,2,"Purva","Abodh") // adds an new elements after taking the place on which elements are gonna add and no. of elements which would be removed.
console.log(grp)

let grp1 = ["Bhakti","Harshada","Siddhesh","Devendra"]
let slicy = grp1.slice(2) // this will seprate elements of an parent array from the declared index of that array uptill the last index of it by forming a new array of those elements.
console.log(slicy)
let num6 = [525,241,754,235,452,8674,1426,25466]
let slicy1 = num6.slice(1,4) // this will also seprate the array from a given initial index uptill the element earlier to the final index in a given range.
console.log(slicy1)


