const cat = {
    name:"kane",
    type:"cat",
    age:3,
    sound() {
        console.log(`${cat.name} is  ${cat.age} years  ${cat.type} that sounds like meow! meow!`)
    }
}

const dog = {
    name:"Chandler",
    type:"dog",
    age:5,
    sound() {
        console.log(`${dog.name} is ${dog.age} years  ${dog.type} that sounds like Bow! Bow!`)

    }
}

const horse = {
    name:"Max",
    type:"horse",
    age:8,
    sound() {
        console.log(`${horse.name} is ${horse.age} years  ${horse.type} that sounds like neigh! neigh!`)
    }

}
cat.sound()
dog.sound()
horse.sound()