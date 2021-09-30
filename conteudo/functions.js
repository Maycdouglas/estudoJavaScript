/*

    FUNÇÕES são um tipo de dado estrutural

*/


// declaração da função
function createPhrases() {
    console.log('Nada está tão ruim que não possa piorar')
    console.log('Acorde, é mais um dia para o fracasso')
    console.log('Não existe prazer maior do que desistir')
}

//executa a função
createPhrases()

//function expression or function anonymous
const sum = function(number1, number2) {
    console.log(number1 + number2)
}

sum(2,3)

//function hoisting
sayMyName()

function sayMyName() {
    console.log('Maycon')
}

//arrow function

const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Maycon')
const a = 2
let dobro = a => 2 * a //dessa forma o que vem depois da seta é o retorno da arrow function
console.log(dobro(a))

//callback function
function digaMeuNome(nome) {
    nome()
}

digaMeuNome(
    () => {
        console.log("Estou em uma callback")
    }
)

/*

    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword

*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}
const maycon = new Person("Maycon")
console.log(maycon.walk())

//FUNÇÃO BIND

const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //o bind serve para que a função consiga referenciar o this ao objeto que queremos
falarDePessoa()

//Mais um exemplo com o bind e uma solução alternativa
//A função setInterval gera um intervalo de execucao da funcao enviada como parametro
function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() { 
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa


//Função ForEach
//nessa função o indice do array será sempre o segundo parametro, o terceiro parametro é o proprio array e o primeiro parametro é o conteudo do array naquela posicao
const aprovados = ['Ana', 'Bia', 'Manoel', "Zoo", 'Pedro']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

//criando um forEach
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Ana', 'Bia', 'Manoel', "Zoo", 'Pedro']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
