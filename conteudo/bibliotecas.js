// BIBLIOTECAS

/*
    COMMANDER.JS

    - Biblioteca para criação de novos scripts para o terminal
    - INSTRUÇÃO:
        - Executar comando:
            - npm install commander
*/

import { Command } from 'commander'

const program = new Command()

/*
    PARAMETROS:
        - OPTION
            - Uma string informando a flag (-t por exemplo) e o nome completo da tag acompanhado do tipo do dado
            - Uma string que descreve a tag
*/

program
    .version('0.0.1')
    .option('-t, --texto <string>', 'caminho do texto a ser processado')
    .option('-d --destino <string>', 'caminho da pasta onde salvar o arquivo de resultados')
    .action((options) => {
        const { texto, destino } = options

        if(!texto || !destino){
            console.error('erro: favor inserir caminho de origem e destino')
            program.help()
            return
        }
    })


program.parse() // executa o program

/*
    PATH.JS

    - Biblioteca para gerenciamento de caminhos relativos e absolutos
    - INSTRUÇÃO:
        - Biblioteca nativa do NODE.JS
*/

// - Exemplo de comando: 
//     - node conteudo/leituraArquivo.js arquivos/texto-web.txt

import path from 'path'

// trecho abaixo só irá funcionar se for utilizado dentro do ACTION na biblioteca COMMANDER, pois o texto e destino são oriundos de lá
console.log("Antes do path.resolve(): ",texto)
console.log("Antes do path.resolve(): ",destino)


const caminhoTexto = path.resolve(texto) // resolve o caminho do texto (criado na biblioteca COMMANDER)
const caminhoDestino = path.resolve(destino) // resolve o caminho do destino (criado na biblioteca COMMANDER)

console.log("Depois do path.resolve(): ",texto)
console.log("Depois do path.resolve(): ",destino)


/*
    CHALK.JS

    - Biblioteca para...
    - INSTRUÇÃO:
        - Executar comando:
            - npm install chalk
*/

import chalk from 'chalk'

console.log(chalk.blue('teste azul')) // pinta o texto de azul no terminal
console.log(chalk.green('teste verde')) // pinta o texto de verde no terminal