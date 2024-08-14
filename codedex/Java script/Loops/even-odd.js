
for (let a =1; a<=50; a++){
    if(a%2 !==0){
        continue;
    }
    if (a==42) {
        console.log(a)
        break;
    }
    console.log(a)
}