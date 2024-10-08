const mongoose = require("mongoose");

const PresencaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    resumositucao: { type: String, required: true },
    localizacao: { type: String, required: true },
    dataCriacao: { type: Date, default: Date.now }
});

const Presenca = mongoose.model("Presenca", PresencaSchema);

module.exports = Presenca;
