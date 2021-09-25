/*

    Prototype

    * prototype-based language
    * prototype chain
    * __proto__
    * 
    
    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo

*/

console.log('9' + 5) //Type coersion
console.log(Number('9') + 5) //Type conversion

//Manipulando String e Números

//Transformar String em Número e Número em String

let string = "123"
console.log(Number(string))
let number = 321
console.log(String(Number))

//Contas quantos caracteres tem uma palavras e quandos dígitos tem um número
let word = "Paralelepipedo"
console.log(word.length)
let number2 = 1234
console.log(String(number2).length)

//Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let numero = 34214289258.1093482
console.log(numero.toFixed(2).replace(".",","))

//Transformar letras minúsculas em maiúsculas. E o contrário
let palavra = "Programar é foda!"
console.log(palavra.toUpperCase())
console.log(palavra.toLowerCase())

// Separar um texto que contem espaços em um novo array onde cada teto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, colqoue _
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

// Verificar se o texto contém a palavra Amor
let phrase = "Eu quero viver!"
console.log(phrase.includes("Amor"))

// Criar Array com construtor
let myArray = new Array('a', 'b', 'c')
console.log(myArray)

// Contar elementos de um Array
console.log(myArray.length)

// Transformar uma cadeia de caracteres em elementos de um array
let word = "manipulação"
console.log(Array.from(word))

// Manipulando Arrays

let techs = ["html", "css", "js"]

// Adicionar um item no fim do Array
techs.push("nodejs")
// Adicionar no começo do Array
techs.unshift("sql")
// Remover do fim do Array
techs.pop()
// Remover do começo do Array
techs.shift()
// Pegar somente alguns elementos do Array
console.log(techs.slice(1,3))
// Remover 1 ou mais itens em qualquer posição do Array
techs.splice(1, 2)
// Encontrar a posição de um elemento no Array
let index = techs.indexOf('html')
console.log(index)


console.log(techs)