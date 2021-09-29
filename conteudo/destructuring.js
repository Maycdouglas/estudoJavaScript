// Operador Destructuring em Objeto

const pessoa = {
    nome: 'Maycon',
    idade: 21,
    endereco: {
        logradouro: 'Rua MD',
        numero: 293
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa //dessa forma posso dar um novo nome para o atributo
console.log(n,i)

const { sobrenome, bemHumorada = true } = pessoa  //como nao existe o valor bemHumorada, vai assumir o true, já o sobrenome ficará como undefined 

console.log(sobrenome, bemHumorada)

//extraindo de um objeto dentro de outro objeto
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro,numero,cep)

// Operador Destructuring em Array
const [a] = [10]
console.log[a]

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //vai pular o 7 e o 8
console.log(n1,n3,n5,n6)

//o exemplo a seguir é de dificil leitura, por isso não é muito recomendado
const [, [ , nota]] = [[,8,8], [9,6,8]] //vai pegar o 6, que é o segundo elemento do segundo array
console.log(nota)