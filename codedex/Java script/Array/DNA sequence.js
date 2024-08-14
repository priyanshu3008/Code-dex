// let myDna = [
//   "A",
//   "C",
//   "G",
//   "A",
//   "C",
//   "T",
//   "A",
//   "T",
//   "G",
//   "C",
//   "G",
//   "A",
//   "A",
//   "G",
//   "A",
//   "C",
//   "T",
//   "C",
//   "T",
//   "T",
//   "T",
//   "A",
//   "G",
//   "C",
// ];

// let arr= [];

// for (let i = 1; i <= myDna.length; i++) {
//   let a = Math.floor(Math.random() * myDna.length);
//   let b = Math.floor(Math.random() * myDna.length);
//   let c = Math.floor(Math.random() * myDna.length);

//   let str = myDna[a] + myDna[b] + myDna[c];

//   arr.unshift(str);
//   console.log(arr);
// }



let myDna = [
    "A", "C", "G", "A", "C", "T", "A", "T", "G", "C",
    "G", "A", "A", "G", "A", "C", "T", "C", "T", "T",
    "T", "A", "G", "C"
  ];
  
  let arr = [];
  
  for (let i = 1; i <= myDna.length; i++) {
    // Generate three random indices within the bounds of myDna array
    let a = Math.floor(Math.random() * myDna.length);
    let b = Math.floor(Math.random() * myDna.length);
    let c = Math.floor(Math.random() * myDna.length);
  
    // Create a string of three random DNA bases
    let str = myDna[a] + myDna[b] + myDna[c];
  
    // Add the new string to the beginning of the array
    arr.unshift(str);
  }
  
  // Log the final array after the loop
  console.log(arr);
  