/*

    CLASSES

*/

class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}


class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) { //essa reticencias permite que envie um ou mais lancamentos
        lancamentos.forEach(l => this.lancamentos.push(l)) //essa função concatena os lancamentos
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => { //essa função atualiza o valor total do ciclo financeiro
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 45000)
const contaDeLuz = new Lancamento('Luz', -220)
const contas = new CicloFinanceiro(6, 2018)

contas.addLancamentos(salario,contaDeLuz)
console.log(contas.sumario())

//Exemplo de classes com herenças

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)

//Exemplo de classe com propriedades privadas e get/set

// cria propriedades com menos privacidade que o #. Útil para quando precisar evitar colisões
// de nome em um contexto mais amplo, pois mesmo se dois Symbols tiverem a mesma descrição,
// eles serão diferentes, veja:
const symbol1 = Symbol('teste')
const symbol2 = Symbol('teste')
console.log(symbol1 === symbol2)

const idadeSymbol = Symbol('idade');

class Pessoa {
 
    //cria propriedades VERDADEIRAMENTE privadas
    #nome

    constructor(nome,idade){
        this.#nome = nome
        this[idadeSymbol] = idade
    }

    get nome() {
        return this.#nome
    }

    set nome(novoNome) {
        this.#nome = novoNome
    }

    get idade() {
        return this[idadeSymbol]
    }

    set idade(novaIdade) {
        if(novaIdade < 0) {
            console.log("Idade não pode ser negativa.")
        } else {
            this[idadeSymbol] = novaIdade
        }
    }

    //método privado
    #sussurar(){
        console.log("Olá")
    }

    falar(){
        this.#sussurar()
    }

}

const pessoa1 = new Pessoa('Maycon',10)
console.log(pessoa1)
pessoa1.falar()

// Métodos Estáticos

class Calculadora {
    //cria método estático, que não precisa de uma instância para ser usado
    static somar(a,b) {
        return a + b
    }
}

console.log(Calculadora.somar(10,2))
const calculadora1 = new Calculadora()
console.log(calculadora1.somar) // métodos estáticos não são acessíveis por instâncias