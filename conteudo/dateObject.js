/*

    Propriedades e Métodos do objeto Date

*/

//CONSTRUTORES:

let data1 = new Date(); //Gera a data de execução do construtor

let valor = 100000;
let data2 = new Date(valor); //Parametro unico corresponde aos milissegundos a partir do primeiro dia do ano de 1970

let dataString = "Mon, 25 Dec 1995 13:30:00 GMT";
let data3 = new Date(dataString);//A string enviada como parametro precisa estar no modelo acima

let ano = 2000;
let mes = 4;
let dia = 0;
let hora = 22;
let minuto = 0;
let segundo = 4;
let milissegundo = 45;
let data4 = new Date(ano,mes,dia,hora,minuto,segundo,milissegundo); //Forma completa de criar uma data especifica

let data5 = new Date(2001,2,20,5); //Posso passar com menos parametros e os demais assumirão valor padrão

console.log("Data 1 =", data1);
console.log("Data 2 =", data2);
console.log("Data 3 =", data3);
console.log("Data 4 =", data4);
console.log("Data 5 =", data5);


//PROPRIEDADES:


//PRINCIPAIS METODOS:

