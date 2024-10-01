/*
    - Existem duas formas de importar e exportar no JAVASCRIPT
*/

/*
    MÉTODO 1: REQUIRE - FORMA MAIS ANTIGA
        - "nativa" do NODE.JS
        - para este método funcionar, deve-se ter a seguinte linha no arquivo a ser importado:
            - module.exports = nomeFuncao
*/
const fs = require('fs') // importa módulo do NODE
const array = require('./array') //importa arquivo ARRAY.JS

/*
    MÉTODO 2: REQUIRE - FORMA MAIS ATUAL
        - nativa do JAVASCRIPT moderno
        - INSTRUÇÕES:
            - executar o seguinte comando:
                - npm init -y
                - este comando cria um arquivo package.json no diretório do projeto
            - inserir a chave "type": "module" no arquivo package.json
            - inserir a seguinte linha no arquivo a ser importado:
                - export default function nomeFuncao() {}
*/
import fs from 'fs'
import array from './array.js'
import { nomeFuncao, nomeFuncao2 } from './array.js'
