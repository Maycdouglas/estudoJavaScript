import {autor} from "../models/Autor.js"

class AutorController {

    static async listarAutores(req, res){
        try {
            const listaAutores = await autor.find({}) // find é um método do mongoose que vai se conectar com o BD e buscar na coleção
            res.status(200).json(listaAutores) //json é mais usado, por aceitar dados mais complexos
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao listar autores`})
        }
    }

    static async cadastrarAutor(req, res){
        try {
            const novoAutor = await autor.create(req.body)
            res.status(201).json({ message: "Criado com sucesso!", autor: novoAutor })
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao cadastrar autor`})
        }
    }

    static async listarAutorPorId(req, res){
        try {
            const id = req.params.id
            const autorEncontrado = await autor.findById(id)
            res.status(200).json(autorEncontrado)
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao encontrar autor`})
        }
    }

    static async atualizarAutor(req, res){
        try {
            const id = req.params.id
            await autor.findByIdAndUpdate(id, req.body)
            res.status(200).json({message: `Autor atualizado!`})
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao atualizar autor`})
        }
    }

    static async deletarAutor(req, res){
        try {
            const id = req.params.id
            await autor.findByIdAndDelete(id)
            res.status(200).json({message: `Autor deletado!`})
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao deletar autor`})
        }
    }

}

export default AutorController