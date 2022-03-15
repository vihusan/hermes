const jwt = require('jsonwebtoken');
const { request, response } = require('express');
const Usuario = require("../models/usuario.model");


const validarJWT = async (req = request, res = response, next) => {
    const token = req.header('x-token')

    if (!token) {
        return res.status(500).json({
            msg: "Sin autorización!"
        })
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRET_KEY);
        const usuario = await Usuario.findById(uid);

        if (!usuario) {
            return res.status(400).json({
                msg: "Usuario no existe"
            });
        }

        if (!usuario.estado) {
            return res.status(400).json({
                msg: "Usuario no existe"
            });
        }

        req.usuario = usuario;
        next();
    } catch (err) {
        console.log(err);
        res.status(401).json({
            msg: "Token no valido"
        })
    }

};

module.exports = {
    validarJWT
}