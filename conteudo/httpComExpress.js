//deve instalar o express com npm install express
import express from "express"

const app = express()
app.use(express.json()) // middleware. executa o json em todas as requisições que chegam
// arquivos que chegam via body são convertidos ao tipo string, logo é necessário converter ao json

const PORT = 3000

const livros = [
    {
        id: 1,
        titulo: "O Caminho dos Reis"
    },
    {
        id: 2,
        titulo: "Palavras de Radiância"
    }
]

// cria um rota get
// primeiro parametro é a rota
// segundo parametro é a callback
app.get("/", (req,res) => {
    res.status(200).send("Curso de Node.js")// 200 é o código HTTP e o send é o que é enviado para o cliente. Só pode ser usado em dados simples
})

app.get("/livros", (req,res) => {
    res.status(200).json(livros) //json é mais usado, por aceitar dados mais complexos
})

// cria rota post
app.post("/livros", (req, res) => {
    livros.push(req.body) //vai inserir o conteúdo do body da requisição no vetor de objetos "livros"
    res.status(201).send("Livro cadastrado com sucesso")
})

// :id representa a variavel que enviaremos via url
app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id) //params representa os parametros que enviamos na requisição.
    res.status(200).json(livros[index])
})

// cria rota put, para alterar
// poderia usar o patch também, mas o put é mais recomendado. O patch altera somente alguns campos, não precisa de todas as chaves
app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.status(200).json(livros)
})

//cria rota delete
app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id)
    livros.splice(index, 1)
    res.status(200).send("Livro excluído com sucesso")
})

app.listen(PORT, () => {
    console.log("Servidor Executando!")
})


function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id) // precisa converter, pois id vem como string devido o HTTP
    })
}

export default app