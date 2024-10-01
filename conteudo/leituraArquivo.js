/* 

Para leitura de arquivo deve-se passá-lo no momento da execução do programa.
A biblioteca FILE SYSTEM oferece métodos para leitura e escrita de arquivos. 
    - Ela é nativa do NODE
*/
const fs = require('fs') // Importa a biblioteca File System

/*
- A propriedade abaixo retorna um array com o caminho do NODE e também o caminho do arquivo que está sendo executado
- Caso passe mais de um argumento no CMD, terão mais elementos neste array, todos com o caminho daquele parametro
- é uma funcionalidade do NODE
- Exemplo de comando: 
    - node conteudo/leituraArquivo.js arquivos/texto-web.txt
- Retorno: 
    - ["C:\\Program Files\\nodejs\\node.exe", 
       "C:\\Users\\mayco\\Documents\\Programming\\JAVASCRIPT\\estudosJavaScript\\conteudo\\leituraArquivo.js",
       "arquivos/texto-web.txt"]
*/
const caminhosArquivos = process.argv 
console.log(caminhosArquivos)
const caminhoTexto = caminhosArquivos[2]

/* fs.readFile() 
    - Função para leitura de arquivo
    - PARAMETROS:
        - caminhoArquivo - OBRIGATÓRIO
        - encodeDoTexto - OBRIGATÓRIO?
            - costuma ser o UTF-8
        - funçãoCallback
            - PARAMETROS:
                - erro - OBRIGATÓRIO
                - texto - OBRIGATÓRIO
    - existem outro parâmetros opcionais que não cabem aqui mas podem ser verificados na documentação do método
        - https://nodejs.org/api/fs.html#fsreadfilepath-options-callback
*/

fs.readFile(caminhoTexto, 'utf-8', (erro, texto) => {
    console.log(texto)
})