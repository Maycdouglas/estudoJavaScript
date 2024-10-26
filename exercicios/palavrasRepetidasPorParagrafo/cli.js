import fs from 'fs' // biblioteca File System
import path from 'path' // biblioteca para gerenciamento de caminhos relativos e absolutos
import {Command} from 'commander' // biblioteca para criar novos scripts de terminal
import chalk from 'chalk' // biblioteca para alterar cores do terminal
import {contaPalavras} from './index.js'
import {montaSaidaArquivo} from './helpers.js'
import trataErros from './funcoesErro.js'

// COMANDO PARA EXECUTAR:
// node exercicios/palavrasRepetidasPorParagrafo/cli.js -t arquivos/texto-web.txt -d resultados


const program = new Command()

program
    .version('0.0.1')
    .option('-t, --texto <string>', 'caminho do texto a ser processado')
    .option('-d, --destino <string>', 'caminho da pasta onde salvar o arquivo de resultados')
    .action((options) => {
        const {texto, destino} = options // para desestruturar, as constantes precisam ter o mesmo nome das chaves do objeto options

        // verifica se o texto e o destino não estão vazios
        if(!texto || !destino) {
            console.error(chalk.red('erro: favor inserir caminho de origem e destino'))
            program.help() // informa a descrição das opções no terminal
            return
        }

        const caminhoTexto = path.resolve(texto)
        const caminhoDestino = path.resolve(destino)
        
        try {
            processaArquivo(caminhoTexto, caminhoDestino)
            console.log(chalk.green('texto processado com sucesso'))
        } catch (error) {
            console.log('ocorreu um erro no processamento', error)
        }
    })

program.parse() // executa o program

function processaArquivo(texto, destino){
    fs.readFile(texto, 'utf-8', (erro, texto) => {
        try {
            if(erro) throw erro
            const resultado = contaPalavras(texto)
            criaESalvaArquivo(resultado, destino)
        } catch (erro) {
            trataErros(erro)
        }
    })
}

async function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`
    const textoPalavras = montaSaidaArquivo(listaPalavras)

    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras)
        console.log('arquivo criado')
    } catch (error) {
        throw error
    }

}