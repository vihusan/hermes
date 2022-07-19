const { response, request } = require('express');

const bcryptjs = require('bcryptjs');
const { generarJWT } = require("../helpers/jwt_generator");

const Usuario = require('../models/usuario.model');
const TipoVertice = require('../models/tipovertice.model');

const tipoVerticeGet = async (req = request, res = response) => {
    try {
        res.status(200).json({
            "ok": true,
            msg: "Get API - controller tipoVertice",
        });
    } catch (error) {
        console.log(error);
    }
}

const tipoVerticePost = async (req = request, res = response) => {
    try {
        res.status(200).json({
            "ok": true,
            msg: "Post API - controller tipoVertice"
        });
    } catch (error) {
        console.error(error);
    }
}

const tipoVerticePut = async (req = request, res = response) => {
    try {

        res.status(200).json({
            "ok": true,
            msg: "Put API - controller tipoVertice"
        });
    } catch (error) {
        console.log(error);
    }
}

const tipoVerticePatch = (req, res = response) => {
    try {
        res.status(200).json({
            "ok": true,
            msg: "Patch API - controller tipoVertice"
        });
    } catch (error) {
        console.log(error);
    }
}

const tipoVerticeDelete = async (req = request, res = response) => {
    try {
        res.status(200).json({
            "ok": true,
            msg: "Delete API - controller tipoVertice"
        });
    } catch (error) {
        console.log(error);
    }
   
}

module.exports = {
    tipoVerticeGet,
    tipoVerticePost,
    tipoVerticePut,
    tipoVerticeDelete,
    tipoVerticePatch,
}