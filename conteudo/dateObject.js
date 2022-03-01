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
let mes = 4; //Janeiro corresponde ao 0
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

//PRINCIPAIS METODOS:

let data = new Date(2000,4,10,14);

console.log("O dia é:",data.getDate()); //Retorna um numero de 1 a 31 correspondente ao dia do Mês
console.log("O dia da semana é:",data.getDay()); //Retorna um numero de 0 a 6 correspondente ao dia da Semana. 0 equivale ao Domingo
console.log("O ano é:",data.getFullYear()); //Retorna o Ano. NÃO utilizar getYear()
console.log("O mês é:",data.getMonth()); //Retorna o mês. 0 corresponde ao Janeiro.
console.log("A hora é:",data.getHours()); //Retorna a hora
console.log("Os minutos são:",data.getMinutes()); //Retorna os minutos
console.log("Os segundos são:",data.getSeconds()); //Retorna os segundos
console.log("Os milissegundos são:",data.getMilliseconds()); //Retorna os milissegundos
console.log("Os milissegundos até essa data são:",data.getTime()) //Retorna os milissegundos de 1970 até a data. Pode ser usado para duplicar datas ou para medir tempo de execução
console.log("Diferença de minutos para o UTC:",data.getTimezoneOffset()) //Retorna a diferença do fuso horário local em minutos para o UTC
console.log("Milissegundos até o momento atual:",Date.now()); //Método estático que retorna os milissegundos até o momento atual que roda o código
console.log("Data legível no formato americano:",data.toDateString()) //Retorna apenas dia da semana, mes, dia e ano da data em String
console.log("Data legível no formato americano:",data.toString()) //Retorna todas as infos da data em String
console.log("Hora legível no formato americano:",data.toTimeString()) //Retorna a hora da data em String
console.log("Data no formato local:",data.toLocaleDateString()); //Retorna a data no formato local de execução. Também posso passar idioma e país(en-US) como argumento
console.log("Data e hora no formato local:",data.toLocaleString()); //Retorna a data e hora no formato local de execução. Também posso passar idioma e país(en-US) como argumento
console.log("Hora no formato local:",data.toLocaleTimeString()); //Retorna a hora no formato local de execução. Também posso passar idioma e país(en-US) como argumento
