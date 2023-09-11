const { Router } = require("express");
const router = Router();
const {categoriaGet,guardarCategoria,eliminarCategoria,categoriaByIdGet} = require('../controllers/categorias');

router.get('/', categoriaGet);
router.get('/:id', categoriaByIdGet);
router.post('/', guardarCategoria);
router.delete('/:id',eliminarCategoria); 

module.exports = router;
