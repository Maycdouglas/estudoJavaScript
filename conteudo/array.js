/*

    Array (Vetores) é um agrupamento de dados, uma lista

    [Maycon, 21]

    é valor por referência, ou seja, se uma nova constante receber o mesmo array, tudo que fizer nela, altera o outro e vice-versa

    link documentação: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

// Exemplo de Array heterogêneo (ou seja, com elementos de diferentes tipos)
console.log([
    "Maycon", 
    21, 
    true
])

// Criação de Array
const animals = [
    'Lion',
    'Monkey',
    'Dog'
]

// Criação de Array com construtor - Não recomendada
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
const arrayTamanhoSete = new Array(7) // Cria um Array vazio com tamanho 7
console.log(arrayTamanhoSete)

// Exclusão de elemento - A posição se torna UNDEFINED
delete aprovados[1] //dessa forma exclui o elemento e o seta como undefined naquela posição
console.log(aprovados)

// Acesso dos valores dentro do Array
console.log(animals[0])

// ==================== PROPRIEDADES DO ARRAY ==================== //

// Array.length - Tamanho do Array
console.log(animals.length)

aprovados.sort() //ordena os elementos do array, altera o array original

// ==================== MÉTODOS DO ARRAY ==================== //

/*
    LISTA DE MÉTODOS
        - Array.from()
        - Array.isArray()
        - Array.of()
        - Array.prototype.at()
        - Array.prototype.concat()
        - Array.prototype.copyWithin()
        - Array.prototype.entries()
        - Array.prototype.every()
        - Array.prototype.fill()
        - Array.prototype.filter()
        - Array.prototype.find()
        - Array.prototype.findIndex()
        - Array.prototype.findLast()
        - Array.prototype.findLastIndex()
        - Array.prototype.flat()
        - Array.prototype.flatMap()
        - Array.prototype.forEach()
        - Array.prototype.includes()
        - Array.prototype.indexOf()
        - Array.prototype.join()
        - Array.prototype.keys()
        - Array.prototype.lastIndexOf()
        - Array.prototype.map()
        - Array.prototype.pop()
        - Array.prototype.push()
        - Array.prototype.reduce()
        - Array.prototype.reduceRight()
        - Array.prototype.reverse()
        - Array.prototype.shift()
        - Array.prototype.slice()
        - Array.prototype.some()
        - Array.prototype.sort()
        - Array.prototype.splice()
        - Array.prototype.toLocalString()
        - Array.prototype.toReversed()
        - Array.prototype.toSorted()
        - Array.prototype.toSpliced()
        - Array.prototype.toString()
        - Array.prototype.unshift()
        - Array.prototype.values()
        - Array.prototype.with()
*/

/* Array.from() 
    - Cria uma nova instância de Array a partir de um objeto semelhante ou iterável
    - UTILIDADES:
        - Converte string em um array de caracteres
        - Converte um NodeList em um array
        - Gera um array de números sequenciais
    - PARAMETROS:
        - arrayLike - OBRIGATÓRIO
        - função map - OPCIONAL
        - thisArg - valor a ser utilizado como this quando a função map for chamada - OPCIONAL
    - Método estático
*/

// Conversão de string em um Array de caracteres
const str = 'OpenAI';
const array = Array.from(str);
console.log(array); // ['O', 'p', 'e', 'n', 'A', 'I']

// Gera um array de números sequenciais
const sequence = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(sequence); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// =============================== //

/* Array.isArray() 
    - Verifica se um objeto é uma Array. Retorna TRUE caso seja e FALSE caso não seja
    - UTILIDADES:
        - Converte string em um array de caracteres
        - Converte um NodeList em um array
        - Gera um array de números sequenciais
    - PARAMETROS:
        - objeto - OBRIGATÓRIO
    - Método estático
*/

const obj = {
    name: 'OpenAI',
    data: [1, 2, 3],
    meta: {
      tags: ['AI', 'Machine Learning'],
      stats: { views: 1000 }
    }
  };

console.log("obj.name = ",Array.isArray(obj.name)); // false
console.log("obj.data = ",Array.isArray(obj.data)); // true
console.log("obj.meta.tags = ",Array.isArray(obj.meta.tags)); // true
console.log("obj.meta.stats = ",Array.isArray(obj.meta.stats)); // false
  
// =============================== //

/* Array.of() 
    - Cria um array a partir de uma lista de valores individuais
    - PARAMETROS:
        - elementos - podem ser quantos quiser - OBRIGATÓRIO
    - Método estático
*/
const value1 = 42;
const value2 = 'Hello';
const value3 = { key: 'value' };

const arrayOf = Array.of(value1, value2, value3);
console.log(arrayOf); // [42, 'Hello', { key: 'value' }]

// =============================== //

/* Array.prototype.at() 
    - Permite acessar elementos de um array usando índices positivos e negativos.
    - Caso utilize índices negativos, será contado do último elemento para trás
    - UTILIDADES:
        - Acessa o último elemento de um array
    - PARAMETROS:
        - indice - pode ser um número positivo ou negativo - OBRIGATÓRIO
*/
// Acessa elemento de um array usando índice
const arrPositivo = [10, 20, 30, 40];
console.log(arrPositivo.at(0)); // 10

// Acessa o último elemento de um array usando número negativo
const arrNegativo = [10, 20, 30, 40];
console.log(arrNegativo.at(-1)); // 40

// =============================== //

/* Array.prototype.concat() 
    - Mescla dois ou mais arrays
    - Retorna um novo array
    - UTILIDADES:
        - Concatena arrays e valores
    - PARAMETROS:
        - valor - OBRIGATÓRIO
*/

// Concatena múltiplos arrays
const arr1 = [1];
const arr2 = [2];
const arr3 = [3, 4];
const resultMultiplos = arr1.concat(arr2, arr3);
console.log(resultMultiplos); // [1, 2, 3, 4]

// Concatena arrays e valores
const arr = [1, 2];
const result = arr.concat(3, 4);
console.log(result); // [1, 2, 3, 4]

// =============================== //

/* Array.prototype.copyWithin() 
    - 
    - UTILIDADES:
        - 
    - PARAMETROS:
        - 
*/



// =============================== //

















// ============================================================ //

// Separar um texto que contem espaços em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

// Verificar se o texto contém a palavra Amor
let phrase2 = "Eu quero viver!"
console.log(phrase2.includes("Amor"))

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
//param1 = posição inicial | param2 = qntd de remoções
// altera o array original, mas posso receber os elementos removidos.
removidos = techs.splice(1, 2)

//Inserir elementos na posição 1 (numero que corresponder ao primeiro parametro) e excluir quantos elementos forem dados no segundo parametro
//param1 = posição inicial | param2 = qntd de remoções | param* = elementos a serem inseridos
techs.splice(1, 0, 'Elemento1', 'Elemento 2')

//Recortar array em novo array
//param1 = posição inicial | param2 = posição final
// não pega o elemento da posição final, apenas da inicial
const cortado = techs.slice(1,3)
console.log(techs)
console.log(cortado)

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

// COPIANDO ARRAY
const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = nomes; // Dessa forma, tudo que for alterado em um dos arrays reflete no outro.
const novo2 = [...nomes] //Dessa forma, cria de fato uma cópia, que pode ser alterada sem afetar o original

console.log('nomes: ',nomes)
console.log('novo: ',novo)
console.log('novo2: ',novo2)
nomes.pop()
novo.pop()
novo2.pop()
console.log('nomes: ',nomes)
console.log('novo: ',novo)
console.log('novo2: ',novo2)

//FUNÇÃO FILTER

// cria um novo array/objeto
// Retorna sempre um array com a mesma quantidade de elementos ou MENOS

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,17]
// const multiplosCinco = numeros.filter(function(numero, indice, array){
//         console.log(numero, indice, array)
//         return numero % 5 === 0
// })

// Forma melhor de usar a callback function, usando arrow function
// const multiplosCinco = numeros.filter((numero) => {
//     return numero % 5 === 0
// })

// Forma AINDA melhor de usar a callback function, usando arrow function
const multiplosCinco = numeros.filter(numero => numero % 5 === 0)

console.log('NUMEROS: ',numeros)
console.log('MULTIPLOS DE 5: ',multiplosCinco)
