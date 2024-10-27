import "dotenv/config" //inicializa o dotenv na aplicação. Deve sempre estar no arquivo mais externo da aplicação
import app from "./src/app.js"

const PORT = 3000

app.listen(PORT, () => {
    console.log("Servidor Executando!")
})
