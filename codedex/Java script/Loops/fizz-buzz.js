for(let i = 1; i<=50; i++) {


  if(i%15==0){
    console.log(i+ "BuzzFizz")
    continue;
  }
    if(i%3==0){
        console.log(i+ "Fizz")
    }
    if(i%5==0){
        console.log(i+ "Buzz")
    }else {
        console.log(i)
    }

}