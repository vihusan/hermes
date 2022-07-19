const mongoose = require('mongoose');
const { Schema, model} = require('mongoose');

const VerticesSchema = Schema({
    longitud: {
        type: mongoose.Types.Decimal128,
        required : [true, "Longitud de la coordenada obligatoria"]
    },
    latitud: {
        type: mongoose.Types.Decimal128,
        required : [true, "Latitud de la coordenada obligatoria"]
    },
    tipovertice: {
        type: mongoose.Types.ObjectId,
        required : [true, "Tipo de vetice es obligatorio"]
    }
});

module.exports = model("Vertice", VerticesSchema);