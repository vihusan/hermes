const { response, request } = require('express');

const bcryptjs = require('bcryptjs');
const { generarJWT } = require("../helpers/jwt_generator");

const Usuario = require('../models/usuario.model');
const Vertice = require('../models/vertices.model');

const verticesGet = async (req = request, res = response) => {
    try {
        /**Esta informacion debe de ir en un post */
        const unVertice = new Vertice({ longitud: 12.355, latitud: 55.455});
        await unVertice.save();

        res.status(200).json({
            "ok": true,
            msg: "Guardado exitosamente",
            vertice: unVertice
        });
    } catch (error) {
        console.log(error);
    }
}

const verticesPost = async (req = request, res = response) => {
    try {
        res.status(200).json({
            "ok": true,
            msg: "Post API - controller vertices"
        });
    } catch (error) {
        console.error(error);
    }
}

const verticesPut = async (req = request, res = response) => {
    try {

        res.status(200).json({
            "ok": true,
            msg: "Put API - controller vertices"
        });
    } catch (error) {
        console.log(error);
    }
}

const verticesPatch = (req, res = response) => {
    try {
        res.status(200).json({
            "ok": true,
            msg: "Patch API - controller vertices"
        });
    } catch (error) {
        console.log(error);
    }
}

const verticesDelete = async (req = request, res = response) => {
    try {
        res.status(200).json({
            "ok": true,
            msg: "Delete API - controller vertices"
        });
    } catch (error) {
        console.log(error);
    }
   
}

module.exports = {
    verticesGet,
    verticesPost,
    verticesPut,
    verticesDelete,
    verticesPatch,
}