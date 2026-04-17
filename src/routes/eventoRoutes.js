const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');

router.get('/agregarEvento', eventoController.agregarEvento);

router.get('/', eventoController.getEventos);

router.get('/editarEvento/:id', eventoController.editarEvento);

router.delete('/:id', eventoController.deleteEvento);

router.post('/agregarEvento', eventoController.createEventos);

router.put('/editarEvento/:id', eventoController.updateEvento);

module.exports = router;
