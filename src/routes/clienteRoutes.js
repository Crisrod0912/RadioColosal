const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/agregarCliente', clienteController.agregarCliente);

router.post('/agregarCliente', clienteController.createClientes);

router.get('/', clienteController.getClientes);

router.get('/editarCliente/:id', clienteController.editarCliente);

router.delete('/:id', clienteController.deleteCliente);

router.post('/:id/update', clienteController.updateCliente);

router.put('/:id', clienteController.updateCliente);

module.exports = router;
