const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require("../models/usuario.model");
const { generarJWT } = require("../helpers/jwt_generator")


const login = async (req, res = response) => {
    const { email, password } = req.body;

    try {
        // vefificar email
        const usuario = await Usuario.findOne({ email })

        if (!usuario)
            return res.status(400).json({
                msg: "correo/password no son correctos"
            });

        // verficar el usuario este activo
        if (!usuario.estado)
            return res.status(400).json({
                msg: "correo/password no son correctos"
            });

        //verificar la contraseña
        const passwordValido = bcryptjs.compareSync(password, usuario.password);
        if (!passwordValido)
            return res.status(400).json({
                msg: "correo/password no son correctos"
            });

        //Generar el JWT
        const token = await generarJWT(usuario.id);


        res.json({
            data: usuario,
            token
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "hable con el administrador"
        });
    }
}

module.exports = {
    login
}