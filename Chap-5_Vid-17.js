// Array methods in js (Part-1)
let num = [1,2,3,34,4]
console.log(typeof(num))

let b = num.toString() // this method will convert above array into string.
console.log(typeof(b))

let c = num.join('_') // this method joins elements of an array with declared joiner.
console.log(c)

num.push(8) // this method will add/push an element at last index inside a array.
console.log(num)

num.pop() // this method will remove/pop last element of an array. If declared will return poped element as output.
console.log(num)

num.shift() // this method will remove element from start of an array.
console.log(num)

num.unshift(10) // this method will add element on a start of an array.
console.log(num)
