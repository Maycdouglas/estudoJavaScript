/*
    COMMANDER.JS

    - Biblioteca para...
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