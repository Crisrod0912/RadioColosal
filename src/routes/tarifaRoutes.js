const express = require('express');
const router = express.Router();
const tarifaController = require('../controllers/tarifaController');

router.get('/agregarTarifa', tarifaController.showCreateForm);

router.post('/agregarTarifa', tarifaController.createTarifa);

router.get('/', tarifaController.listTarifas);

router.get('/editarTarifa/:id', tarifaController.showEditForm);

router.put('/:id', tarifaController.updateTarifa);

router.delete('/:id', tarifaController.deleteTarifa);

module.exports = router;
