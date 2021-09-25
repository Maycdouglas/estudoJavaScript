/*

    Variáveis em JavaScript podem ser:

        * var
            é global
        * let
            só funciona no escopo que foi criada
        * const
            não pode ser alterado durante a execução da aplicação
            só funciona no escopo que foi criada

    O JavaScript é uma linguagem fracamente tipada, então o tipo da variável é de acordo com a sua inicialização
*/

var cor = "Azul"
cor = "Vermelho"
console.log(cor)

let tamanho = "Grande"
tamanho = "Pequeno"
console.log(tamanho)

const estrela = "Sol"
console.log(estrela)

let variavel = "Palavra" //inicializa a variavel como tipo String
console.log(typeof variavel)
variavel = 24 //muda o tipo da variavel para Number
console.log(typeof variavel)

// ============================================================ //

//agrupamento de declarações
let age, name

//assignment ou atribuição de valores
age = 21
nome = "Maycon"

console.log(age,nome)

//concatenando os valores
console.log('O ' + nome + ' tem ' + age + ' anos.')

//interpolando valores
console.log(`O ${nome} tem ${age} anos.`)
