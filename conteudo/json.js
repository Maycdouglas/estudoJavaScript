// JSON
// Java Script Object Notation
// Veio para substituir o XML

//Abaixo exemplo de objeto no JavaScript
const estudante = {
    nome: 'Ana',
    idade: 32,
    cpf: '23423423423',
    email: 'ana@email.com',
    telefones: ['551198745632', '551198745633'],
    endereco: {
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43',
    },
};

//Abaixo exemplo de objeto no JSON
// {
//     "nome": "Ana",
//     "idade": 32,
//     "cpf": "23423423423",
//     "email": "ana@email.com",
//     "telefones": ["551198745632", "551198745633"],
//     "endereco": {
//         "rua": "Rua Joseph Climber",
//         "numero": "45",
//         "complemento": "apto 43"
//     }
// }

// Regras do JSON:
/*
    - não é tipo de dado JS
    - chaves das propriedades com aspas duplas
    - strings com aspas duplas
    - não pode ter vírgula no fim
    - funções não são permitidas
    - comentários não são permitidos
    - suporta apenas tipos primitivos (string, number, boolean, null), arrays e objetos
*/

// LENDO UM ARQUIVO JSON
// A função require() é nativa do node.js
const estudante1 = require('../estudante.json') // Importa o arquivo JSON e transforma ele em um objeto JS

// Poderia utilizar a linha abaixo para importar
// import estudante from '../estudante.json'

// CONVERTER JSON

const stringEstudante1 = JSON.stringify(estudante1) // Converte um JSON para STRING
// Tecnicamente, está convertendo um Objeto JS para STRING
console.log(stringEstudante1)

const objEstudante1 = JSON.parse(stringEstudante1) // Converte uma STRING para JSON
console.log(objEstudante1)


// COPIANDO OBJETOS COM CLONAGEM PROFUNDA (Deep Clone):
const objetoOriginal = { chave: 'valor' };
const copiaProfunda = JSON.parse(JSON.stringify(objetoOriginal));

copiaProfunda.chave = 'novoValor';
console.log(objetoOriginal.chave); // Saída: valor