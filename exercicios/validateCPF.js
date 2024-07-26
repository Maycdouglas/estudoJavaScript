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

function CadastroPessoaFisica(cpf){
    Object.defineProperty(this, 'cpfDigits', {
        //value: cpf.replace(/\D+/g,""),
        //get: () => this.cpfDigits
        enumerable: false,
        get: () => cpf.replace(/\D+/g,"")
    })
}

CadastroPessoaFisica.prototype.validar = function() {
    cpfArray = Array.from(this.cpfDigits)
    newCPFArray = cpfArray.splice(0,9) 

    newCPFArray.push(this.geraDigito(newCPFArray))
    newCPFArray.push(this.geraDigito(newCPFArray))

    newCPFDigits = newCPFArray.join("")

    if(this.cpfDigits === newCPFDigits)
    {
        console.log("CPF VALIDADO COM SUCESSO!")
    } else {
        console.log("CPF NÃO VALIDADO!")
    }   
}

CadastroPessoaFisica.prototype.geraDigito = function(cpfArray) {
    digitsMultiplied = cpfArray.map(this.multiplicaDigitosCPF)
    sumDigitsMultiplied = digitsMultiplied.reduce(this.somaProdutosCPF)
    
    digit = 11 - (sumDigitsMultiplied % 11)
    
    if(digit > 9)
        digit = 0
    
    return digit
}

CadastroPessoaFisica.prototype.multiplicaDigitosCPF = function(digito,indice,cpfArray) {
    digito = Number(digito)
    let multiplicador = cpfArray.length - indice + 1
    digito = digito * multiplicador
    return digito
}

CadastroPessoaFisica.prototype.somaProdutosCPF = function(acumulador, atual) {
    acumulador = acumulador + atual
    return acumulador
}

const cpf = new CadastroPessoaFisica("705.484.450-52")

cpf.validar()
console.log(cpf.cpfDigits)
    