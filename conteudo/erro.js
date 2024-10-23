/*
    CLASSE ERROR

    Ela possui as seguintes propriedades:
        - error.name
            - indica a classe de Erro gerada. Por exemplo: ReferenceError
        - error.code
            - uma string que representa um identificador para o erro
        - error.message
            - descrição da string do erro conforme definido
        - error.stack
            - o ponto do código onde a classe error foi instanciada, seguido do caminho percorrido pelo erro.

    Segue abaixo as diferentes classes de erro:
*/

/*  RangeError
        - ocorre quando passamos um argumento fora do intervalo esperado pela função. 
*/

let array = new Array(-1)

/*  ReferenceError
        - ocorre quando tentamos acessar uma variável que não está definida
*/

console.log(variavelQueNaoExiste)

/*  SyntaxError
        - ocorre quando tentamos interpretar código sintaticamente inválido.
*/

// objeto sem a vírgula separando as chaves
const objeto = {
    chave1: "maycon"
    chave2: 24
}

/*  TypeError
        - ocorre quando um argumento fornecido não é de um tipo permitido
*/

let objeto2 = null
objeto2.nome = 'Maycon'


/*  SystemError
        - occore quando cometemos alguma violação do sistema operacional enquanto executamos o código, como por exemplo ler arquivo que não existe.
        - códigos de erros comuns:
            - ENOENT
                - acontece quando não existe a entidade esperada (arquivo ou diretório) no caminho que especificamos.
            - EISDIR
                - ocorre quando uma operação espera um arquivo, mas recebe, no caminho informado, um diretório.
            - ENOTDIR
                - foi fornecido o caminho de um arquivo, esse arquivo existe (caso contrário, recebemos um erro ENOENT), mas o esperado era um diretório.
            - ENOTFOUND
                - quando não conseguimos estabelecer uma conexão com algum host devido a um erro de Domain Name System
            - ETIMEDOUT
                - quando fazemos uma solicitação de conexão HTTP, esperamos um bom tempo e não obtemos uma resposta
            - ECONNREFUSED
                - quando tentamos nos conectar a uma máquina de destino e ela rejeita nossa solicitação
            - EADDRINUSE
                - recebemos esse erro ao iniciar ou reiniciar um servidor web, onde tentamos acessar uma porta que já está ocupada por algum outro servidor.
            - EADDRNOTAVAIL
                - é lançado ao executar um servidor Node.js em uma porta específica. Geralmente indica um problema de configuração com seu endereço IP, como vincular seu servidor a um IP estático.
*/
