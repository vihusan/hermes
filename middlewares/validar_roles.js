const { response, request } = require("express");

const esAdminRole = (req = request, res = response, next) => {

    if (!req.usuario) {
        return res.status(500).json({
            msg: "Se desea validar el role sin antes validar el token"
        });
    }

    const { role, nombre } = req.usuario;

    if (role != 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: `${nombre} no es personal autorizado`
        })
    }

    next();
}

const tieneRoles = (...roles) => {
    return (req = request, res = response, next) => {
        if (!req.usuario) {
            return res.status(500).json({
                msg: "Se desea validar el role sin antes validar el token"
            });
        }

        if (!roles.includes(req.usuario.role)) {
            return res.status(401).json({
                msg: `El usuario requiere un de estos roles : ${roles}`
            })
        }
        next();
    }
}

module.exports = {
    esAdminRole,
    tieneRoles
}