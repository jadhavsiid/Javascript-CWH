// Problem Statement: WAP in js to generate a random number and store it in a variable. The Program takes input from user to tell them whether the guess was correct, greater or lesser than original number. Players score should be 100-(no.of guesses taken). The Program should be terminate after a correct guess. Number should be between 1-100
console.log("Welcome to number guessing game!!")
let num = Math.random() * 100
let number = parseInt(num)
let guesses = 1
console.log("Can you guess a random number in 10 chances ??")
while (guesses <= 2) {
    let a = prompt("Guess a number:")
    if (a < number) {
        console.log("You've entered number smaller than the actual number, Guess Again!!")
    }
    else if (a > number) {
        console.log("You've entered number Larger than the actual number, Guess Again!!")
    }
    else {
        console.log(`Congratulations, You Guessed the correct number with ${guesses} left !!`)
    }
}
if (guesses > 10) {
    console.log("GAME OVER!!")
    console.log("You Can't Guess now.")
}
