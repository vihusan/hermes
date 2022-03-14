const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch } = require('../controllers/usuarios.controller');
const { validarCampos } = require('../middlewares/validar_campos');
const { esRoleValido, emailExiste, idExiste } = require('../helpers/db_validators');

router.get('/', [
    check("limit", "No es numero").isNumeric(),
    check("desde", "No es numero").isNumeric(),
    validarCampos
], usuariosGet);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email').custom(emailExiste).isEmail().withMessage('El correo no es valido'),
    check('password', 'El password deben ser más de 6 letras').not().isEmpty().isLength({ min: 6 }),
    check('role').custom(esRoleValido),
    validarCampos
], usuariosPost);

router.put('/', [
    check('id').custom(idExiste).isMongoId().withMessage("No es un ID de mongo"),
    check('role').custom(esRoleValido),
    validarCampos
], usuariosPut);

router.delete('/', [
    check('id').custom(idExiste).isMongoId().withMessage("No es un ID de mongo"),
    validarCampos
], usuariosDelete);

router.patch('/', usuariosPatch);


module.exports = router;