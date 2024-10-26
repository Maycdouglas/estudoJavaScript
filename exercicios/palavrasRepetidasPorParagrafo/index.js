/*
    - Este é um exercício realizado no curso JavaScript com Node.js: criando sua primeira biblioteca
    - Objetivo é criar uma aplicação capaz de retornar palavras repetidas em cada parágrafo de um texto, a fim de identificar quando deve substituir para um sinônimo e deixar o texto menos repetitivo.



*/

export function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto)
    const contagem = paragrafos.flatMap((paragrafo) => {
        if(!paragrafo) return []
        return verificaPalavrasDuplicadas(paragrafo)
    })
    return contagem
}

function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n')
}

function limpaPalavras(palavra){
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
}

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ')
    const resultado = {}
    listaPalavras.forEach(palavra => {
        if(palavra.length >= 3){
            const palavraLimpa = limpaPalavras(palavra)
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
        }
    })
    return resultado
}