const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const { aristasGet, aristasPost, aristasPut, aristasDelete, aristasPatch } = require('../controllers/aristas.controller');
const { esRoleValido, emailExiste, idExiste } = require('../helpers/db_validators');
const { validarCampos, validarJWT, esAdminRole, tieneRoles } = require('../middlewares/index');

router.get('/',[

], aristasGet);

router.post('/', [
   
], aristasPost);

router.put('/', [

], aristasPut);

router.delete('/', [
], aristasDelete);

router.patch('/', aristasPatch);


module.exports = router;