const router = require('express').Router();

const {getProductos,postProducto} = require('../controllers/controladores')

router.get('/getAll',getProductos)
router.post('/post',postProducto)

module.exports=router