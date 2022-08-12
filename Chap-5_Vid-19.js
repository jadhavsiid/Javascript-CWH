// Using Loops in Arrays in Javascript
let num = [3,5,1,2,4]

for (let i=0; i<num.length; i++){ 
    //this for loop will simply print elements of an declared array.
    console.log(num[i])
}
console.log("\n")
num.forEach((element) =>{
    // this forEach loop will print square of an elements of an declared array.
    console.log(element*element)
})
console.log("\n")

let name = "Siddhesh"
let arr = Array.from(name) 
// Array.from method is used to make an Array out of any String or HTML Collection.
console.log(arr)

console.log("\n")

for (let i of num){
    // this for..of loop is an shortcut of an above shown traditional for loop to simply print elements of an declared array. 
    console.log(i)
}

console.log("\n")

for (let i in num){
    // this for..in loop is an shortcut of an above shown traditional for loop to simply print Keys of an declared array. 
    console.log(num[i])
}