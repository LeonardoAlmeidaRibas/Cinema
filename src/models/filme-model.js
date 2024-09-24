import db from "../config/db.js"

const filmeSchema = new db.Schema({
    nome: {
        type: String,
        required: true,
    },
    lancamento: {
        type: Date,
        required: true,
    },
    genero: {
        type: String,
        enum: ["Terror", "Romance", "Aventura", "Comédia", "Ficção", "Suspense"],
        required: true
    }
})

const Filme = db.model("Filme", filmeSchema);

export default Filme;