const memeArray = [
    "https://i.imgur.com/bSi4xLb.png",
    "https://i.imgur.com/6y0G7N0.png",
    "https://i.imgur.com/LXnRao1.png",
    "https://i.imgur.com/Qqoxh1N.png"
  ];

const captionArr = [
      'Go down buddy',
      'Be yourself',
      'Stay true',
      'Oh damn',
    ];
const meMe = document.getElementById('random-meme');
const captionCool = document.getElementById('random-caption');
const memeButton = document.getElementById('generator-button');

 memeButton.addEventListener('click', function() {

    const randomIndex = {

        indexMeme : Math.floor(Math.random()*memeArray.length),
        indexCaption :Math.floor(Math.random()*captionArr.length),
    }

     meMe.src = memeArray[randomIndex.indexMeme]
     captionCool.textContent = captionArr[randomIndex.indexCaption]

    }
 )