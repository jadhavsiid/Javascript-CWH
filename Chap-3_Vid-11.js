// Functions in Js
function oneplusavg(x,y) {
  console.log("done")
  return Math.round (1 + (x + y) / 2);
}
let a = 1;
let b = 2;
let c = 3;
console.log(oneplusavg(a,b));
console.log(oneplusavg(b,c));
console.log(oneplusavg(a,c));

// Arrow Function [Prefer such syntax for function in js]
const sum = (a,b)=>{
    return a+b;
}
console.log("The sum is:",sum(8,8));
// Another example of Arrow Function [Prefer such syntax]
const hello =()=>{
    console.error("This is a Cute Error.")
}
hello()
