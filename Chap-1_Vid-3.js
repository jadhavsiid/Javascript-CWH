// const, let and var in Javascript 
console.log("Javascript video-3");
var a = 45;
let b = "Siddhesh";
const author = "Siddhesh"; // const is an identifier whose value do not changes.
// const author = "Harry"; // this will throw error.
var c = null;
var d = undefined;
{
    let b = 'this';
    console.log(b);
}
console.log(b);
console.log(author);
// Never use var in your code as using it is an outdated method.
// using let inside a block compiles block code seperately as compared to the code outside the block.
// using Let is an Efficient method to code.