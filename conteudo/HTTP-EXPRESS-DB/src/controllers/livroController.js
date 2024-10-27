import livro from "../models/Livro.js"

class LivroController {

    static async listarLivros(req, res){
        try {
            const listaLivros = await livro.find({}) // find é um método do mongoose que vai se conectar com o BD e buscar na coleção
            res.status(200).json(listaLivros) //json é mais usado, por aceitar dados mais complexos
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao listar livros`})
        }
    }

    static async cadastrarLivro(req, res){
        try {
            const novoLivro = await livro.create(req.body)
            res.status(201).json({ message: "Criado com sucesso!", livro: novoLivro })
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao cadastrar livro`})
        }
    }

    static async listarLivroPorId(req, res){
        try {
            const id = req.params.id
            const livroEncontrado = await livro.findById(id)
            res.status(200).json(livroEncontrado)
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao encontrar livro`})
        }
    }

    static async atualizarLivro(req, res){
        try {
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body)
            res.status(200).json({message: `Livro atualizado!`})
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao atualizar livro`})
        }
    }

    static async deletarLivro(req, res){
        try {
            const id = req.params.id
            await livro.findByIdAndDelete(id)
            res.status(200).json({message: `Livro deletado!`})
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao deletar livro`})
        }
    }

}

export default LivroController