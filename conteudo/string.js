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

//PROPRIEDADES STRINGS

//LENGTH

let text = "Hello World!";
console.log(text.length); //retorna o tamanho da string