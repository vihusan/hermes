const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const { tipoVerticeGet, tipoVerticePost, tipoVerticePut, tipoVerticeDelete, tipoVerticePatch } = require('../controllers/tipovertice.controller');
const { esRoleValido, emailExiste, idExiste } = require('../helpers/db_validators');
const { validarCampos, validarJWT, esAdminRole, tieneRoles } = require('../middlewares/index');

router.get('/',[

], tipoVerticeGet);

router.post('/', [
   
], tipoVerticePost);

router.put('/', [

], tipoVerticePut);

router.delete('/', [
], tipoVerticeDelete);

router.patch('/', tipoVerticePatch);


module.exports = router;