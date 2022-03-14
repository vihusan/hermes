const Role = require('../models/role.model');
const Usuario = require('../models/usuario.model');

const esRoleValido = async (role = '') => {
    const existeRole = await Role.findOne({ role });
    if (!existeRole) {
        throw new Error(`${role} no es un rol valido`);
    }
};

const emailExiste = async (email = '') => {
    const existeEmail = await Usuario.findOne({ email });
    if (existeEmail) {
        throw new Error(`El ${email} ya esta registrado en la DB`);
    }
};

const idExiste = async (id = '') => {
    const idExiste = await Usuario.findById(id);
    if (!idExiste)
        throw new Error(`El id ${id} no existe en la base de datos`);
}

module.exports = {
    esRoleValido,
    emailExiste,
    idExiste
}