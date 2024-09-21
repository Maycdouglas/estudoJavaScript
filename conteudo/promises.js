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

        if(typeof msg !== 'string') {
            reject('BAD VALUE')
            return
        }
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

//MÉTODO UTEIS DA CLASSE PROMISE

const promises = ['primeiro valor', esperaAi2('Promise 1', 3000), esperaAi2('Promise 1', 500), esperaAi2('Promise 1', 1000), 'outro valor']
//const promises = ['primeiro valor', esperaAi2('Promise 1', 3000), esperaAi2('Promise 1', 500), esperaAi2('Promise 1', 1000), 'outro valor', esperaAi2(2000, 500)]

// Promise.all() - Resolve todas as promises possíveis. Se alguma der erro, vai retornar o erro
Promise.all(promises)
    .then((valor) => {
        console.log(valor)
    })
    .catch((e) => {
        console.log(erro)
    })

// Promise.race() - Entrega o valor da promessa que for resolvida primeiro. Nesse caso do exemplo, entrega a String, ao invés da promessa.
// Só funciona quando tem somente promessas
Promise.race(promises)
    .then((valor) => {
        console.log(valor)
    })
    .catch((e) => {
        console.log(erro)
    })

// Promise.resolve() - Retorna a promessa resolvida
function baixaPagina() {
    const emCache = true

    if(emCache) {
        return Promise.resolve('Página em cache')
    } else {
        return esperaAi2('Baixei a pagina', 2000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('Erro> ', e))

// Promise.reject() - Retorna a promessa rejeitada
function baixaPagina2() {
    const emCache = false

    if(emCache) {
        return Promise.reject('Rejeitei')
    } else {
        return esperaAi2('Baixei a pagina', 2000)
    }
}

baixaPagina2()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('Erro> ', e))