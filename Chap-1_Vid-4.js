// Primitive Data Types in js
// Shortcut to remember them: nn bb ss u
let a = null;
let b = 345;
let c = true; //Boolean: might be true or false.
let d = BigInt("567") + BigInt("3");
let e = "Siddhesh";
let f = Symbol("I am a nice symbol");
let g = undefined;
console.log(a,b,c,d,e,f,g);
console.log(typeof c);

// Objects or Non-Primitive Data Types in js
const item = {
    "Siddhesh": true,
    "Vibhanshu": false,
    "Sushant": 67,
    "Roshan": undefined
}
console.log(item ["Siddhesh"]);
console.log(item ["hero"]);