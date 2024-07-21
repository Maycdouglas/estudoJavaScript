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
console.log(person['name']); //Forma útil de acesso para poder criar algo dinâmico

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

//Deletar atributo do objeto
const pessoa1 = new Object() // outra forma de criar um objeto
pessoa1.nome = 'Luiz'
pessoa1.sobrenome = 'Otávio'

delete pessoa1.nome;
console.log(pessoa1)

//Criar método do objeto
pessoa1.falarNome = () => console.log('Maycon')
pessoa1.falarNome()

//Impede alterar os valores do objeto
Object.freeze(pessoa1); //Posso usá-lo dentro da função construtora
pessoa1.sobrenome = 'Douglas'
console.log(pessoa1)

//defineProperty e defineProperties
function Produto(nome, preco, estoque, marca, madeIn){
    this.preco = preco;

    Object.defineProperty(this, 'nome', {
        enumerable: true,
        // value: marca, // não tem necessidade, por ser um Getter
        //writable: true, // não tem necessidade, por ser um Setter
        configurable: true,
        get: () => nome,
        set: (novoNome) => {
            if (typeof novoNome !== 'string') {
                console.log('Nome precisa ser uma String')
                return
            }
            nome = novoNome
        }

    })

    Object.defineProperty(this,'estoque', {
        enumerable: true, // exibe a chave se TRUE
        value: estoque, // valor
        writable: false, // permite alterar se TRUE
        configurable: true // permite deletar ou reconfigurar se TRUE
    });

    Object.defineProperties(this, {
        marca: {
            enumerable: true,
            value: marca,
            writable: true,
            configurable: false
        },
        madeIn: {
            enumerable: true,
            value: madeIn,
            writable: false,
            configurable: true
        }
    })

}

const produto1 = new Produto('Camiseta',20,3,'Apple','Brazil')
produto1.estoque = 400
delete produto1.marca
delete produto1.madeIn
console.log(produto1.nome)
produto1.nome = 40
console.log(produto1.nome)
// ============================================================ //
