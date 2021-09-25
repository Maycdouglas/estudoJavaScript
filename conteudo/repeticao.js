//continue
for(let i = 10; i > 0; i--) {
    if(i === 5) {
        continue; //dessa forma o 5 não será imprimido no console
    }
    console.log(i)
}

//break
for(let i = 10; i > 0; i--) {
    if(i === 5) {
        break; //dessa forma o 5 e os numeros seguintes não serão imprimidos
    }
    console.log(i)
}

//for...of

let nome = 'Maycon'
let names = ["João", "Roger", "Mila"]

for(let char of nome) {
    console.log(char)
}

for(let name of names) {
    console.log(name)
}

//for...in

let person = {
    name: "Maycon",
    age: 21,
    weight: 76.0
}

for(let property in person) {
    console.log(property)
    console.log(person["name"])
    console.log(person.name)
    console.log(person[property])
}