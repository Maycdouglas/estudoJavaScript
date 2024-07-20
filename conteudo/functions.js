/*

    FUNÇÕES são um tipo de dado estrutural

*/


// declaração da função
function createPhrases() {
    console.log('Nada está tão ruim que não possa piorar')
    console.log('Acorde, é mais um dia para o fracasso')
    console.log('Não existe prazer maior do que desistir')
}

//executa a função
createPhrases()

//function expression or function anonymous
const sum = function(number1, number2) {
    console.log(number1 + number2)
}

sum(2,3)

//function hoisting
sayMyName()

function sayMyName() {
    console.log('Maycon')
}

//arrow function

const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Maycon')
const a = 2
let dobro = a => 2 * a //dessa forma o que vem depois da seta é o retorno da arrow function
console.log(dobro(a))

//callback function
function digaMeuNome(nome) {
    nome()
}

digaMeuNome(
    () => {
        console.log("Estou em uma callback")
    }
)

//Função com muitos argumentos
function funcao(a,b,c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c);
}
funcao(1,2,3,4,5,6,7);
//arguments considera todos os argumentos passados na funcao, mesmo que na declaracao tenha menos argumentos. Não funciona em Arrow Functions.

//IIFE -> Immediately Invoked Function Expression - Função executada imediatamente
(function(idade, peso, altura) {

    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);
//Esse tipo de função permite que ela seja executada imediatamente no momento que é declarada

//Factory Function - Função Fábrica - Responsável por criar objetos com facilidade
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        //Getter - transforma esse método em atributo
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter - transforma esse método em atributo
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            console.log(valor);
        },

        fala(assunto = "Falando qualquer coisa") {
            return `${this.nome} está ${assunto}.`
        },

        altura: a,
        peso: p,
        
        //Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }


    };
}

const p1 = criaPessoa('Maycon', 'Douglas', 1.8, 80);
p1.nomeCompleto = 'Maycon Douglas Gomes';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());

/*

    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword

*/

function Person(name) {

    //Atributos ou métodos privados
    const ID = 1234; //não consegue acessar fora da função

    //também não consegue acessar fora da função
    const metodoInterno = function() {
        return ID + 1;
    }

    //Atributos ou métodos públicos
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}
const maycon = new Person("Maycon")
console.log(maycon.walk())

//FUNÇÃO RECURSIVA
function recursiva(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);

//FUNÇÃO GERADORA
function* geradora1() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

// Cada vez que a função for executada, o retorno será o yield seguinte. Se usar um return em algum momento, tudo após ele não é executado.

function* geradora2() {
    yield 'Valor 1';
    yield 'Valor 2';
    return 'Nao executa o ultimo yield'
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1) //Retorna Object[Generator] {}
console.log(g1.next()) //Retorna o Yield com chaves value e done. A chave done representa se a função geradora já chegou ao fim
console.log(g1.next().value) //Retorna o valor presente no yield
console.log(g1.next().done) //Retorna true ou false, a depende se já chegou ao fim da geradora

const g2 = geradora2();
for (let valor of g2) {
    console.log(valor)
}

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}
function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
}

const g3 = geradora4();
for(let valor of g3) {
    console.log(valor)
}

//FUNÇÃO BIND

const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //o bind serve para que a função consiga referenciar o this ao objeto que queremos
falarDePessoa()

//Mais um exemplo com o bind e uma solução alternativa
//A função setInterval gera um intervalo de execucao da funcao enviada como parametro
function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() { 
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa


//FUNÇÃO FOREACH


//nessa função o indice do array será sempre o segundo parametro, o terceiro parametro é o proprio array e o primeiro parametro é o conteudo do array naquela posicao
const aprovados = ['Ana', 'Bia', 'Manoel', "Zoo", 'Pedro']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

//criando um forEach
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Ana', 'Bia', 'Manoel', "Zoo", 'Pedro']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})


//FUNÇÃO MAP

//gera um novo array!
// a função callback pode receber três parametros: 1)valor atual, 2)indice, 3)o próprio array

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

//exemplo com json
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'

]

//retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json) //transforma as strings em objetos
const apenasPreco = produto => produto.preco

const resultado2 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado2)


//FUNÇÃO FILTER

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p) {
    return p.preco > 500 && p.fragil
}))

//FUNÇÃO REDUCE

//posso passar um valor inicial na função reduce, para ser o primeiro acumulador

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)

//FUNÇÃO CONCAT

const filhas = ["Maisa", "Joaquina"]
const filhos = ["João", "Pedro"]
const todos = filhas.concat(filhos,"Posso passar quantos parametros eu quiser")
console.log(todos, filhas, filhos)

//FUNÇÃO FLATMAP

const escola = [
    {
        nome: 'Turma M1',
        alunos: [{
            nome: "Gustavo",
            nota: 8.1
        }, {
            nome: 'Ana',
            nota: 9.3
        }]
    },
    {
        nome: 'Turma M2',
        alunos: [{
            nome: "Rebeca",
            nota: 8.9
        },{
            nome: "Roberto",
            nota: 7.3
        }]
    }
]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

const notas2 = escola.flatMap(getNotasDaTurma)

console.log(notas2)