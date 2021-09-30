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