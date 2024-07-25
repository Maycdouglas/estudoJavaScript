// 705.484.450-52 | 070.987.720-03

/*
7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0

11 - (237 % 11) = 5 (Primeiro dígito)
Se o resultado for maior do que 9, considera 0

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   6   5   4   3   2
77  0   45  32  48  20  16  15  0   10

11 - (284 % 11) = 2 (Segundo dígito)

*/

// ----------- FUNÇÕES -----------
function multiplicaDigitosCPF(digito,indice,cpfArray){
    digito = Number(digito)
    let multiplicador = cpfArray.length - indice + 1
    digito = digito * multiplicador
    return digito
}

function somaProdutosCPF(acumulador, atual){
    acumulador = acumulador + atual
    return acumulador
}

function geraDigito(cpfArray){
    digitsMultiplied = cpfArray.map(multiplicaDigitosCPF)
    sumDigitsMultiplied = digitsMultiplied.reduce(somaProdutosCPF)
    
    digit = 11 - (sumDigitsMultiplied % 11)
    
    if(digit > 9)
        digit = 0
    
    return digit
}
// -------------------------------


//posso transformar o cpf em objeto

let cpf = '705.484.450-52'
let cpfDigits = cpf.replace(/\D+/g,"")
let cpfArray = Array.from(cpfDigits)
let newCPFArray = cpfArray.splice(0,9) 

newCPFArray.push(geraDigito(newCPFArray))
newCPFArray.push(geraDigito(newCPFArray))

let newCPFDigits = newCPFArray.join("")

if(cpfDigits === newCPFDigits)
{
    console.log("CPF VALIDADO COM SUCESSO!")
} else {
    console.log("CPF NÃO VALIDADO!")
}
    