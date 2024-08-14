let stone = document.getElementById('stone');
let randomNumber = Math.floor(Math.random(9) *10) +1;

if(randomNumber ==1) {
    stone.style.backgroundColor = "white";
} else if (randomNumber==2) {
    stone.style.backgroundColor = "black";
} else if (randomNumber==3) {
    stone.style.backgroundColor = "brown";
}else if (randomNumber==4){
    stone.style.backgroundColor = "gray";
}else if (randomNumber==5) {
    stone.style.backgroundColor = "darkgray";
}else if (randomNumber==6){
stone.style.backgroundColor ="pink";
} else if (randomNumber==7){
    stone.style.backgroundColor = "purple";
}else if (randomNumber==8) {
    stone.style.backgroundColor = "orange";
} else if (randomNumber==9) {
    stone.style.backgroundColor = "yellow";
}