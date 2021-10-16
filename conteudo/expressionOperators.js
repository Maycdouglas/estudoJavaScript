/*

    Expressões e Operadores

    - Expressions
    - Operators
        Binary
        Unary
        Ternary

*/

//Expressão
let number = 1

//Binário
console.log(number + 1)

//Unário
console.log(number++)
console.log(typeof number)

const person = {
    name: "Maycon",
    age: 21
}
delete person.age //Operador delete
console.log(person)

//Ternário
console.log(true ? "Verdadeiro" : "Falso")

/*

    new

    * left-hand-side expression
    * criar um novo objeto

*/

let nome = new String("Maycon")
nome.surName = "Douglas"
let age = new Number(21)
console.log(nome.surName, age)

let date = new Date('2021-09-25') //criar um objeto data
console.log(date)


// Operadores Aritméticos

// multiplicação *
console.log(3 * 4)

//divisão /
console.log(10 / 5)

// soma +
console.log(1 + 4)

// subtração -
console.log(4 - 2)

// resto da divisão %
console.log(10 % 4)

// incremento
let increment = 0 
increment++
console.log(increment)

// decremento
let decrement = 3
decrement--
console.log(decrement)

// exponencial **
console.log(2 ** 3)

//IMPORTANTE
console.log(increment++) //é diferente em relação ao debaixo
console.log(++increment)

// Operadores de comparação

// igual a ==
console.log(1 == 1)
console.log(2983 == "2983") //isso dá verdadeiro, por incrivel que pareça
// diferente de !=
console.log(2 != 1)

// estritamente igual a ===
console.log(1 === 1)
console.log(2983 === "2983") //agora sim vai dar false

// estritamente diferente de !==
console.log(2983 !== "2983")

// Maior que >
console.log(2 > 1)

// Maior igual a >=
console.log(2 >= 2)

// Menor que <
console.log(2 < 3)

// Menor igual a <=
console.log(2 <= 2)

// Operadores de atribuição (Assignment)

let x

console.log(x)

// assignment
x = 1
console.log(x)

//addition assignment
x += 2
console.log(x)

//subtraction assignment
x -= 2
console.log(x)

//multiplication assignment
x *= 2
console.log(x)

//division assignment
x /= 2
console.log(x)

//remainder assignment
x %= 2
console.log(x)

//exponetiation assignment
x **= 2
console.log(x)


// Operadores lógicos

// AND &&
console.log(true && true)

// OR ||
console.log(true || false)

// NOT !
console.log(!false)

// Operadores para String

//comparison
console.log('a' == 'a')

//concatenation
console.log("a" + "a")

//OPERADOR SPREAD

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

const nomes = ['João', 'Maria', 'Pedro', 'Ana']
const novosNomes = ['Maycon', nomes, 'Douglas'] //dessa forma os elementos do vetor nome não são elementos do novosNomes
const novosNomes2 = ['Maycon', ...nomes, 'Douglas']//dessa forma os elementos do vetor nome são elementos do novosNomes2

console.log(nomes)
console.log(novosNomes)
console.log(novosNomes2)

/*

    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório ( condicionais e loops )

    false
    0
    -0
    ""
    null
    undefined
    NaN

*/

//EXEMPLOS:
console.log(false ? "Verdadeiro" : "Falso")
console.log(0 ? "Verdadeiro" : "Falso")
console.log(-0 ? "Verdadeiro" : "Falso")
console.log("" ? "Verdadeiro" : "Falso")
console.log(null ? "Verdadeiro" : "Falso")
console.log(undefined ? "Verdadeiro" : "Falso")
console.log(NaN ? "Verdadeiro" : "Falso")


/*

    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório ( condicionais e loops )

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

*/

//EXEMPLOS:
console.log(true ? "Verdadeiro" : "Falso")
console.log({} ? "Verdadeiro" : "Falso")
console.log([] ? "Verdadeiro" : "Falso")
console.log(1 ? "Verdadeiro" : "Falso")
console.log(3.23 ? "Verdadeiro" : "Falso")
console.log("0" ? "Verdadeiro" : "Falso")
console.log("false" ? "Verdadeiro" : "Falso")
console.log(-1 ? "Verdadeiro" : "Falso")
console.log(Infinity ? "Verdadeiro" : "Falso")
console.log(-Infinity ? "Verdadeiro" : "Falso")