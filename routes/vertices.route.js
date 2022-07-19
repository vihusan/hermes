const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const { verticesGet, verticesPost, verticesPut, verticesDelete, verticesPatch } = require('../controllers/vertices.controller');
const { esRoleValido, emailExiste, idExiste } = require('../helpers/db_validators');

const { validarCampos, validarJWT, esAdminRole, tieneRoles } = require('../middlewares/index');

router.get('/',[

], verticesGet);

router.post('/', [
   
], verticesPost);

router.put('/', [

], verticesPut);

router.delete('/', [
], verticesDelete);

router.patch('/', verticesPatch);


module.exports = router;