/*
    Javascript é beaseado em protótipos para passar propriedades e métodos 
    de um objeto para outro.

    Definição de protótipo
    É o termo usado apra se referir ao que foi criado pela primeira vez, servindo
    de modelo ou molde para futuras produções.

    Todos os objetos tem um referência interna para um protótipo (__proto__)
    que vem da propriedade prototype da função construtora que foi usada para
    criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS
    vai tentar encontrar este membro no próprio objeto e depois a cadeia de
    protótipos é usada até o topo (null) até encontrar (ou não) tal membros

*/

const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}

// Altera o "pai" do objeto, herdando os atributos e métodos presentes no __proto__
Object.setPrototypeOf(objB, objA) 
console.log(objB.chaveA)

// Exibe o __proto__ do objeto. Mais recomendado do que objA.__proto__
Object.getPrototypeOf(objA)

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

//É mais performático colocar os métodos no prototype
Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
};

const p1 = new Produto('Camiseta', 50)
p1.desconto(50)
console.log(p1)

// Cria o objeto já setando os atributos do objeto pai, alé, do prototype
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 50
    },
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'CALÇA'
    }
});

// HERANÇA

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

function Camiseta(nome, preco, cor) {
    this.cor = cor;
    Produto.call(this, nome, preco) //Faz esse objeto herdar os atributos de Produto
}

Camiseta.prototype = Object.create(Produto.prototype) //Copia os metodos do proto de Produto para Camiseta
Camiseta.prototype.constructor = Camiseta; //Altera o Construtor para o objeto Camiseta
Camiseta.prototype.aumento = function(percentual) { //Sobrescreve o método herdado
    this.preco = this.preco + (this.preco * (percentual / 100)) 
}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const camiseta = new Camiseta('Regata', 7.5, 'Preta')
const caneca = new Caneca('Caneca Avengers', 10, 'Porcelana', 100)
console.log(camiseta)
console.log(caneca)
console.log("Estoque da caneca: ",caneca.estoque)


// PROTOTYPE EM FACTORY FUNCTION

function criaPessoa(nome, sobrenome) {

    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando.`)
        },
        comer() {
            console.log(`${this.nome} está comendo.`)
        },
        beber() {
            console.log(`${this.nome} está bebendo.`)
        }
    }

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const pessoa = criaPessoa('maycon', 'douglas')
console.log(pessoa.nome)