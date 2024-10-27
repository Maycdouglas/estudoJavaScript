// deve instalar o mongoose com npm install mongoose
import mongoose, {mongo} from "mongoose" // realiza o intermediario da nossa aplicação com o banco de dados


export default async function conectaNaDatabase() {
    //recebe como parâmetro a string de conexão com o banco de dados
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    return mongoose.connection // propriedade com a conexão realizada com o banco de dados
}