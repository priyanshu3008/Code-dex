const musicPlaylist = [
    "Tom Sawyer",
    "Sabotage",
    "I Wanna Dance With Somebody",
    "Don't Speak",
    "Bulls On Parade",
    "Thriller",
    "The Breaks",
    "Brick",
    "Aeroplane Over the Sea",
    "Tubthumping"
  ];

  musicPlaylist.shift();  // Removes element from beginning
  musicPlaylist.pop(); // Removes element from end
  musicPlaylist.push("good",'bye') //add element from end
  musicPlaylist.unshift("hello","How are you?"); // ADD element in beggining


  console.log(musicPlaylist);