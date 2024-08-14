const number = 10
let guess = Math.floor(Math.random()  *10 +1)
// console.log(guess)

while (number != guess) {

guess = Math.floor(Math.random() *10 +1)
console.log("Your number is" , guess +"?")
}

console.log("Congratulations! You guessed the correct number.Your guess is" , guess)