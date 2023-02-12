/*
    String é uma cadeia de caracteres

    Deve estar entre uma das seguintes opções:
    "" -> aspas duplas
    '' -> aspas simples
    `` -> template literals ou template strings
        - essa última opção permite multíplas linhas e
        também que insira expressões de linguagem (isso se chama interpolação)
*/

console.log("Exemplo com aspas duplas")
console.log('Exemplo com aspas simples')
console.log(`Exemplo com template literals`)
console.log("Exemplo para usar as aspas simples ' ' ' ' ")
console.log('Exemplo para usar as aspas duplas " " " " ')
console.log(`Exemplo de 
multiplas 
linhas`)
console.log(`Exemplo de interpolação: ${1 + 1}`)
console.log("Exemplo usuando barra invertida \"teste\"")

// ============================================================ //

//PROPRIEDADES STRINGS

//LENGTH

let text = "Hello World!";
console.log(text.length); //retorna o tamanho da string

//MÉTODOS STRINGS

//charAt()
let text = "HELLO WORLD";
let letter = text.charAt(0) //retorna o caracter na posicao que foi enviada como parametro
console.log(letter)

//charCodeAt()
let text = "HELLO WORLD";
let x = text.charCodeAt(0); //retorna o UNICODE do caracter na posicao que foi enviada como parametro
console.log(x)

//concat()
let str1 = "Hello ";
let str2 = "world!";
let res = str1.concat(str2); //retorna uma nova string com a concatenação da que chamou com a(s) que foi(ram) enviada(s) como parametro(s).
console.log(res)

//endsWith()
let text = "Hello world";
text.endsWith("world");
text.endsWith("World");
console.log(text.endsWith("world"))
console.log(text.endsWith("World")) //Ela diferencia letras Maiúsculas

let text2 = "Hello world, welcome to the universe."; 
console.log(text2.endsWith("world", 11))//Exemplo com segundo parametro. Neste caso, o 11 significa que é para considerar que a string tem esse tamanho, por isso nesse caso retorna true.

//fromCharCode()
let char = String.fromCharCode(65); //retorna o caracter correspondente ao UNICODE enviado como parametro. Pode enviar como parametro mais de um UNICODE
console.log(char)

//includes()
let text = "Hello world, welcome to the universe.";
text.includes("world"); //retorna true se a string enviada como parametro está presente na string que chamou o metodo
console.log(text.includes("world"));

    //exemplo com segundo parametro
    text.includes("world", 12); //o segundo parametro define a partir de qual posição o metodo deve começar a busca pela string enviada como parametro
    console.log(text.includes("world", 12))//neste caso retorna false, pois a palavra aparece antes da posicao 12

//indexOf()
let text = "Hello world, welcome to the universe.";
text.indexOf("welcome"); //retorna a posicao da string enviada como parametro
text.indexOf("Welcome"); //retorna -1 quando nao encontra a string
console.log(text.indexOf("welcome"))

    //exemplo com dois parametros
    text.indexOf("e", 5); //retorna a posicao da string enviada como parametro a partir do posicao que tambem foi enviada como parametro
    console.log(text.indexOf("e", 5))

//lastIndexOf()
    //apresenta o mesmo funcionamento do metodo anterior, a diferença é que retorna a ultima posicao da ultima aparicao
let text = "Hello planet earth, you are a great planet.";
text.lastIndexOf("planet");
text.lastIndexOf("Planet");
console.log(text.lastIndexOf("planet"))

//repeat()
let text = "Hello world!";
text.repeat(2); //retorna uma nova string com o numero de repeticoes enviado como parametro
console.log(text.repeat(2))

//replace()
let text = "Visit Microsoft! Microsoft, Microsoft";
text.replace("Microsoft", "W3Schools"); //troca a primeira ocorrencia do primeiro parametro pelo segundo parametro. Para trocar as demais ocorrencias é necessario usar REGULAR EXPRESSION
console.log(text.replace("Microsoft", "W3Schools"))

//search()
    //me parece IGUAL a indexOf()
    let text = "Visit W3Schools!";
    text.search("W3Schools"); //retorna a posicao da string enviada como parametro
    console.log(text.search("W3Schools"))

//slice()
let text = "Hello world!";
text.slice(0, 5); //Retorna uma nova string da posicao 0 até a posicao 5
text.slice(3); //Retorna uma nova string da posicao 3 até o fim
text.slice(-1); //Retorna o ultimo caracter
text.slice(0, 1); //Retorna o primeiro caracter
text.slice(0); //Retorna a string inteira 
console.log(text.slice(0, 1))

//split()
let text = "How are you doing today?";
const myArray = text.split(" "); //retorna cada palavra separada por espaço
const myArray1 = text.split(""); //retorna cada caracter da string
const myArray2 = text.split(" ", 3); //retorna apenas a quantidade de palavras enviadas por parametro
const myArray3 = text.split("o"); //retorna as palavras separadas pelo caracter
const myArray4 = text.split(); //Retorna um array com a string completa dentro

console.log(text)
console.log(myArray4)

//startsWith()
let text = "Hello world, welcome to the universe.";
text.startsWith("Hello");//retorna true se a string começa com a string enviada como parametro
console.log(text.startsWith("Hello"))

    //exemplo com segundo parametro
    console.log(text.startsWith("Hello", 5))//retorna true se a string a partir da posicao enviada como parametro iniciar com a string enviada como parametro

//substr()
let text = "Hello world!";
text.substr(1, 4);//retorna a string a parte do primeiro parametro e com o tamanho de acordo com o segundo parametro
text.substr(2);//retorna a partir da posicao 2
text.substr(-5, 5);//retorna os ultimos 6 caracteres
text.substr(0, 1);//retorna somente o primeiro
text.substr(text.length-1, 1);//retorna somente o ultimo
text.substr(-1, 1)//também retorna somente o último
console.log(text.substr(1, 4))


//substring()
    //bastante parecido com substr, porem a diferença é o segundo parametro que indica a posicao final que o corte deve ser realizado
let text = "Hello world!";
text.substring(1, 4);
text.substring(4, 1);//Retorna igual o de cima, pois ele inverte as posicoes
text.substring(-3)//Retorna a partir do indice 0
console.log(text.substring(1, 4))

//toLowerCase()
let str = "Hello World!";
str.toLowerCase();//retorna uma nova string com todos os caracteres minusculos
console.log(str.toLowerCase())

//toUpperCase()
let str = "Hello World!";
str.toUpperCase(); //Retorna a string com todos os caracteres maiusculos
console.log(str.toUpperCase())

//trim()
let str = "       Hello World!        ";
str.trim();//Retorna a String sem espaços nas extremidades
console.log(str) 
console.log(str.trim()) 