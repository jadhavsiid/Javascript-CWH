// Loops in js 

// for loop example
 for (let i = 0; i < 5; i++){
    console.log(i);
}
// Quick Quiz : Write a sample for loop program of your choice:- Program to find sum of first '10' natural numbers.
let sum = 0;
let n = 10;
for (var j = 0; j <= n; j++){
    sum+=j
}
console.log("Sum of first 10 natural number is: ",+sum);
console.log(j) // This will give error if j is 'let' as it has block-level scope whereas it will compile if j is 'var' as it has global scope.

// for in loop

 let obj ={
    siddhesh: 90,
    Vibhanshu:45,
    Aniket: 83,
    Tejas: 96,
    Bhakti: 44
}
for (let a in obj){
    console.log(" Marks of " + a + " are: " + obj[a])
}

// for of loop

 for (let b of "Siddhesh"){
    console.log(b)
} 



