const {response, request} = require('express');

const usuariosGet = (req = request, res = response) => {
    res.status(200).json({
        "ok" :  true,
        msg: "get API - controller"
    });
}

const usuariosPost = (req = request, res = response) => {
    const {nombre, edad} = req.body;

    res.status(200).json({
        "ok" :  true,
        nombre,
        edad
    });
}

const usuariosPut = (req = request, res = response) => {
    const {id, limit, page, user} = req.query;

    res.status(200).json({
        "ok" :  true,
        msg: "Put API - controller",
        limit, 
        page
    });
}

const usuariosPatch = (req, res = response) => {
    res.status(200).json({
        "ok" :  true,
        msg: "Patch API - controller"
    });
}

const usuariosDelete = (req = request, res = response) => {
    res.status(200).json({
        "ok" :  true,
        msg: "Delete API - controller"
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch,
}