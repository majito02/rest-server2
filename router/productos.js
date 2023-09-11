const { Router } = require("express");
const router = Router();
const {obtenerProduto,guardarProdcuto} = require('../controllers/productos');

router.get('/', obtenerProduto);
router.post('/', guardarProdcuto);

module.exports = router;