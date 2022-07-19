const mongoose = require('mongoose');
const { Schema, model} = require('mongoose');

const TipoVerticeSchema = Schema({
    nombre: {
        type: String,
        required : [true, "Nombre de vertice"]
    },
    descripcion: {
        type: String,
        required : [true, "Descripcion de vertice"]
    },
});

module.exports = model("TipoVertice", TipoVerticeSchema);