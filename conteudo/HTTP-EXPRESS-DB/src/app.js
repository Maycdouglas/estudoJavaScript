//deve instalar o express com npm install express
import express from "express"
import conectaNaDatabase from "./config/dbConnect.js"
import routes from "./routes/index.js"

const conexao = await conectaNaDatabase()

// verifica se o evento error aconteceu. Se sim, executa a função callback
// na documentação do mongoose tem a lista de eventos que podem servir de parametro para este método
conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro)
})

// verifica se o evento open aconteceu. Se sim, executa a função callback
// na documentação do mongoose tem a lista de eventos que podem servir de parametro para este método
conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})

const app = express()
routes(app)

export default app