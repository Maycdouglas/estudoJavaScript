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


