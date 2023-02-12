//SWITCH

let expression = 'a'

switch(expression) {
    case 'a':
        console.log('a')
        break
    case 'b':
        console.log('b')
        break
    case 'c':
        console.log('c')
        break
    default:
        console.log('default')
        break
}

//throw

function sayMyName(name) {
    if(name === '') {
        throw new Error("Nome é obrigatório")
    }

    console.log(name)
}

//try...catch
try {
    sayMyName()
} catch(e) {
    console.log(e)
}

try {
    sayMyName()
} catch(e) {
    console.log(e)
} finally { //sempre eh executado, independente se teve erro ou nao.
    console.log("Maycon");
}