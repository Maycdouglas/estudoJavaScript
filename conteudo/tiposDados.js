/*
    String é uma cadeia de caracteres

    Deve estar entre uma das seguintes opções:
    "" -> aspas duplas
    '' -> aspas simples
    `` -> template literals ou template strings
        - essa última opção permite multíplas linhas e
        também que insira expressões de linguagem (isso se chama interpolação)
*/

console.log("Exemplo com aspas duplas")
console.log('Exemplo com aspas simples')
console.log(`Exemplo com template literals`)
console.log("Exemplo para usar as aspas simples ' ' ' ' ")
console.log('Exemplo para usar as aspas duplas " " " " ')
console.log(`Exemplo de 
multiplas 
linhas`)
console.log(`Exemplo de interpolação: ${1 + 1}`)

// ============================================================ //

/*

    Number é um tipo de dado para os números

    Os tipos que o number pode ter:

    10 -> Inteiros
    10.5 -> Reais ou Float
    NaN -> Not a Number
    Infinity -> Infinito

*/

console.log(10) // exemplo com número inteiro
console.log(10.5) // exemplo com número real
console.log(10 / "String") // exemplo com Not a Number
console.log(Infinity) // exemplo com Infinito 

// ============================================================ //

/* 
    Boolean é um tipo de dado que tem apenas 2 valores
    
    O nome é para homenagear o criador, George Boole

    São eles:
    - true
    - false

*/

console.log(true) //exemplo com true
console.log(false) //exemplo com false

// ============================================================ //

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

/*

    undefined
        não existe

    null
        existe mas tem nada dentro dele
        objeto que possui nada dentro

*/

console.log(undefined === null) // exemplo que mostra que são diferentes

// ============================================================ //
