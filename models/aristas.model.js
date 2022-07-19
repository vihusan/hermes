const mongoose = require('mongoose');
const { Schema, model} = require('mongoose');

const AristasSchema = Schema({
    verticeinicial: {
        type: mongoose.Types.ObjectId,
        required : [true, "Vertice incial obligatorio"]
    },
    verticefinal: {
        type: mongoose.Types.ObjectId,
        required : [true, "Vertice final obligatorio"]
    },
    distancia: {
        type: mongoose.Types.Decimal128,
        required : [true, "Distacia entre vertices obligatoria"]
    },
    descripcion: {
        type: String,
        required : [true, "Descripcion de arista obligatoria"]
    },
});

module.exports = model("Aristas", AristasSchema);