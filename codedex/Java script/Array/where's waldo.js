const characters = [
    "The Wally Watchers",
    "Wilma",
    "Fritz",
    "Wizard Whitebeard",
    "Odlaw",
     "Waldo",
    "Woof"
  ];

  indexofWaldo = characters.indexOf("Waldo");

  if (characters.includes("Waldo")) {
    console.log(`Found Waldo at index : ${indexofWaldo}`)
  } else {
    console.log("Not found")
  }
