/*

    Object é um tipo de dado estrutural, ou seja, cria uma estrutura

    Possui propriedades -> Atributos
    Possui funcionalidades -> Métodos

    { propriedade: "valor" }

*/

console.log({
    name: "Maycon",
    idade: 21,
    vivo: true,
    andar: function() {
        console.log('andar')
    }
})


//criando um objeto
const person = {
    name: "Maycon",
    age: 21,
    weight: 75.0,
    isAdmin: true
}

console.log(person.name)
console.log(person.age)
console.log(person.weight)
console.log(person.isAdmin)

// ============================================================ //



// ============================================================ //

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

// Operador Destructuring na Função com Objeto

function rand({ min = 0, max = 1000}) { //se a funcao nao receber parametros ao ser chamada, vai assumir estes valores
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //essa funcao floor retorna o menor numero inteiro anterior ao parametro
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({min: 955}))

// ============================================================ //
