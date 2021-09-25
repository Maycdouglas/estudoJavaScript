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