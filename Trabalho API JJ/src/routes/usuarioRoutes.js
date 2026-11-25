const router = require('express').Router();
const controller = require('../controllers/usuarioController');
router.get('/',controller.listar);
router.post('/',controller.criar);
router.put('/:id',controller.atualizar);
router.delete('/:id',controller.excluir);
module.exports=router;
