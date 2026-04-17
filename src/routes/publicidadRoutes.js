const express = require('express');
const router = express.Router();
const publicidadController = require('../controllers/publicidadController');

router.get('/agregarPublicidad', publicidadController.agregarPublicidad);

router.get('/', publicidadController.getPublicidades);

router.get('/editarPublicidad/:id', publicidadController.editarPublicidad);

router.delete('/:id', publicidadController.deletePublicidad);

router.post('/agregarPublicidad', publicidadController.createPublicidades);

router.put('/editarPublicidad/:id', publicidadController.updatePublicidad);

module.exports = router;
