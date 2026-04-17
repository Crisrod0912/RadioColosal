const express = require('express');
const router = express.Router();
const comentarioController = require('../controllers/comentarioController');

router.get('/agregarComentario', comentarioController.showCreateForm);

router.post('/agregarComentario', comentarioController.createComentario);

router.get('/', comentarioController.listComentarios);

router.get('/editarComentario/:id', comentarioController.showEditForm);

router.put('/:id', comentarioController.updateComentario);

router.delete('/:id', comentarioController.deleteComentario);

module.exports = router;
