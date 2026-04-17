const express = require('express');
const router = express.Router();
const programacionController = require('../controllers/programacionController');

router.get('/agregarProgramacion', programacionController.showCreateForm);

router.post('/agregarProgramacion', programacionController.createProgramacion);

router.get('/', programacionController.listProgramaciones);

router.get('/editarProgramacion/:id', programacionController.showEditForm);

router.put('/:id', programacionController.updateProgramacion);

router.delete('/:id', programacionController.deleteProgramacion);

module.exports = router;
