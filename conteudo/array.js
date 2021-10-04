/*

    Array (Vetores) é um agrupamento de dados, uma lista

    [Maycon, 21]

*/

//Exemplo de Array heterogêneo (ou seja, com elementos de diferentes tipos)
console.log([
    "Maycon", 
    21, 
    true
])


//Criando um array
const animals = [
    'Lion',
    'Monkey',
    'Dog'
]

// Criar Array com construtor
let myArray = new Array('a', 'b', 'c')
console.log(myArray)

//Forma não muito recomendada para criar array
let aprovados = new Array('Bia', 'Carlos', 'Ana')

//Forma recomendada
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)
aprovados.sort() //ordena os elementos do array, altera o array original
console.log(aprovados)

delete aprovados[1] //dessa forma exclui o elemento e o seta como undefined naquela posição

//Acessar os valores dentro do Array
console.log(animals[0])

//Tamanho do array
console.log(animals.length)

// ============================================================ //

// Separar um texto que contem espaços em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

// Verificar se o texto contém a palavra Amor
let phrase = "Eu quero viver!"
console.log(phrase.includes("Amor"))

// Transformar uma cadeia de caracteres em elementos de um array
let word = "manipulação"
console.log(Array.from(word))

/* 
    --------------- MANIPULANDO ARRAYS ---------------
*/

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

//Inserir elementos na posição 1 (numero que corresponder ao primeiro parametro) e excluir quantos elementos forem dados no segundo parametro
techs.splice(1, 0, 'Elemento1', 'Elemento 2')

// Encontrar a posição de um elemento no Array
let index = techs.indexOf('html')
console.log(index)


console.log(techs)

// ============================================================ //

// Operador Destructuring em Array
const [a] = [10]
console.log[a]

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //vai pular o 7 e o 8
console.log(n1,n3,n5,n6)

//o exemplo a seguir é de dificil leitura, por isso não é muito recomendado
const [, [ , nota]] = [[,8,8], [9,6,8]] //vai pegar o 6, que é o segundo elemento do segundo array
console.log(nota)

// Operador Destructuring na Função com Array

function rand2([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // aqui inverte os valores usando o operador destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) 
}

console.log(rand2([50, 40]))
console.log(rand2([992]))
console.log(rand2([ , 10]))