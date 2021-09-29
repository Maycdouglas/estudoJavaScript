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