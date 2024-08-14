
function palindrome(word) {

   let lowercase = word.toLowerCase();
    let reserveWord = ""
    for(let i =lowercase.length-1; i>=0; i--){
      reserveWord += lowercase[i];
    }
    return lowercase === reserveWord;


}

console.log( palindrome("nan"));

