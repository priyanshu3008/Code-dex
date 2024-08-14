// num = 5465347378687
// binary = ""
// while(num>0) {
//     binary = num%2 + binary
//       num = Math.floor(num/2)
// }
// console.log("Binary representation is: ", binary)


// Write code below 💖
let num = 67672
let binary = ""

while(num>0) {
  binary = num%2 + binary
  num = Math.floor(num/2)
}
console.log(binary)