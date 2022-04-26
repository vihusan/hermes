const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { login, loginGoogle} = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validar_campos');


router.get('/login', [
    check('email', "El correo es obligatorio").isEmail(),
    check('password', "La contraseña es obligaoria").not().isEmpty(),
    validarCampos
], login);

router.post('/login_google', loginGoogle);

module.exports = router;