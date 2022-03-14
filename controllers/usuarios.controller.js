const { response, request } = require('express');
const Usuario = require('../models/usuario.model')
const bcryptjs = require('bcryptjs');


const usuariosGet = async (req = request, res = response) => {
    try {
        const { limit = 2, desde = 0 } = req.query
        const query = { estado: true };

        const [misUsuarios, total] = await Promise.all([
            Usuario.find(query)
                .skip(desde)
                .limit(limit),
            Usuario.countDocuments(query)
        ]);

        res.status(200).json({
            "ok": true,
            total,
            data: misUsuarios
        });
    } catch (error) {
        console.log(error);
    }
}

const usuariosPost = async (req = request, res = response) => {
    try {
        const { nombre, email, password, role } = req.body;
        const usuario = new Usuario({ nombre, email, password, role });

        //Encriptar la contraseña 
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt);

        // guardar en la base de datos
        await usuario.save();

        res.status(200).json({
            "ok": true,
            usuario
        });
    } catch (error) {
        console.error(error);
    }
}

const usuariosPut = async (req = request, res = response) => {
    const { id } = req.headers;
    const { password, google, ...resto } = req.body;

    //TODO validar contra la base de datos
    if (password) {
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);
    res.status(200).json({
        "ok": true,
        usuario
    });
}

const usuariosPatch = (req, res = response) => {
    res.status(200).json({
        "ok": true,
        msg: "Patch API - controller"
    });
}

const usuariosDelete = async (req = request, res = response) => {
    const { id } = req.headers;

    const usuario = await Usuario.findByIdAndUpdate(id, { estado: false })

    res.status(200).json({
        "ok": true,
        data: usuario
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch,
}