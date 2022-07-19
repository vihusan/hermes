const { response, request } = require('express');

const bcryptjs = require('bcryptjs');
const { generarJWT } = require("../helpers/jwt_generator");

const Usuario = require('../models/usuario.model');
const Aristas = require('../models/aristas.model');

const aristasGet = async (req = request, res = response) => {
    try {
        res.status(200).json({
            "ok": true,
            msg: "Get API - controller aristas",
        });
    } catch (error) {
        console.log(error);
    }
}

const aristasPost = async (req = request, res = response) => {
    try {
        res.status(200).json({
            "ok": true,
            msg: "Post API - controller aristas"
        });
    } catch (error) {
        console.error(error);
    }
}

const aristasPut = async (req = request, res = response) => {
    try {

        res.status(200).json({
            "ok": true,
            msg: "Put API - controller aristas"
        });
    } catch (error) {
        console.log(error);
    }
}

const aristasPatch = (req, res = response) => {
    try {
        res.status(200).json({
            "ok": true,
            msg: "Patch API - controller aristas"
        });
    } catch (error) {
        console.log(error);
    }
}

const aristasDelete = async (req = request, res = response) => {
    try {
        res.status(200).json({
            "ok": true,
            msg: "Delete API - controller aristas"
        });
    } catch (error) {
        console.log(error);
    }
   
}

module.exports = {
    aristasGet,
    aristasPost,
    aristasPut,
    aristasDelete,
    aristasPatch,
}