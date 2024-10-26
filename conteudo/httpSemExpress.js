import http from "http" // biblioteca com os métodos HTTP


const PORT = 3000 //Porta do servidor

// cria as rotas
const rotas = {
    "/": "Curso de Node2.js",
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rota Autores"
}


// cria o servidor
const server = http.createServer((req,res) => {
    res.writeHead(200, { "Content-Type": "text/plain"}) // Cria o cabeçalho
    res.end(rotas[req.url]) // mensagem exibida na resposta após a execução da criação do servidor
    // req.url é a url da requisição
})


server.listen(PORT, () => {
    console.log("Servidor Escutando!")
})