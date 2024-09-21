// TENTAR RESOLVER ESSE EXERCÍCIO DEPOIS
// ME FALTA ALGUNS CONHECIMENTOS SOBRE HTML PARA RESOLVER ISSO, PRINCIPALMENTE OS MÉTODOS!


class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario') // O parâmetro é o nome da classe do do elemento HTML
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault() // Impede o envio do formulário
        console.log('Formulário não enviado.')
    }

}

const valida = new ValidaFormulario()