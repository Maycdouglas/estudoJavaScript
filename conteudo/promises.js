// PROMISES

// Abaixo um exemplo onde as funções são executadas cada vez em um momento diferente

function rand(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    setTimeout(() => {
        console.log(msg);
    }, tempo)
}

// esperaAi('Frase 1', rand(1,3))
// esperaAi('Frase 2', rand(1,3))
// esperaAi('Frase 3', rand(1,3))

//Abaixo uma forma de resolver isso:

function esperaAi2(msg, tempo) {
    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') reject('BAD VALUE')

        setTimeout(() => {
            resolve(msg);
        }, tempo)
    })
}

esperaAi2('Conexao com o BD', rand(1,3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi2('Buscando dados da Base', rand(1,3))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi2(2222, rand(1,3))
    })
    .then(resposta => {
        console.log(resposta)
    })
    .then(() => {
        console.log('Exibe dados na tela')
    })
    .catch(e => {
        console.log('ERRO: ', e)
    })