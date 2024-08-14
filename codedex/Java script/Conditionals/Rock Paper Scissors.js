
Computer = Math.floor(Math.random()*10)
User = "Paper"
User = "Rock"
User = "Scissors"

 if (Computer>0 && Computer <=3) {
    Computer = "Rock"
} else if (Computer>3 && Computer<=6){
    Computer = "Scissors"
}else {
    Computer = "Paper"
} 

console.log("User Choose :" ,User)


console.log("Computer chose:", Computer)

if(User=="Paper" && Computer == "Rock" ) {
    console.log ("User wins")
} else if (User=="Paper" && Computer=="Scissors" ) {
    console.log ("Computer wins")
}  else if (User=="Rock" && Computer=="Scissors" ) {
    console.log ("User wins")
} else if (User=="Rock" && Computer =="Paper") {
    console.log("Computer wins")
} else if (User = "Scissors" && Computer=="Paper") {
    console.log("User win")
} else if (User=="Scissors" && Computer=="Rock"){
    console.log("Computer wins")
}   else {
    console.log("It's a tie")
}

