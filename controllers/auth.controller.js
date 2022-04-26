const { response, request, json } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require("../models/usuario.model");
const { generarJWT } = require("../helpers/jwt_generator");
const { googleVerify } = require('../helpers/google_verify');


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

const loginGoogle = async (req = request, res = response) => {
    const { id_token } = req.body;
    try {
        const googleUser = await googleVerify(id_token);
        console.log("Google user : ",  googleUser);
    }catch(error){
        json.status(400).json({
            ok : false,
            msg : 'El token no se pudo verificar'
        })
    }
}

module.exports = {
    login,
    loginGoogle
}