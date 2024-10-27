// Isto é um MODELO, ou seja um objeto que representa uma coleção na base de dados

import mongoose from "mongoose";
import {autorSchema} from "./Autor.js"

// Schema é um objeto de configuração que define a estrutura e as propriedades de um documento
const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type:  mongoose.Schema.Types.String, required: true}, // "required" torna essa propriedade obrigatório
    editora: { type: String }, // posso passar somente String, ao invés da forma acima
    preco: { type: mongoose.Schema.Types.Number},
    paginas: { type: Number },
    autor: autorSchema
}, {versionKey:  false}) // referente ao versionamento do mongoDB. Não será utilizada nesse projeto

// a string "livros" se refere à coleção criada no banco de dados (mongoDB Atlas)
// o segundo parâmetro é o objeto Schema criado acima
const livro = mongoose.model("livros", livroSchema)

export default livro