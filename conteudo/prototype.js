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

