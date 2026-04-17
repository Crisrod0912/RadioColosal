const express = require('express');
const router = express.Router();
const multimedioController = require('../controllers/multimedioController');

router.get('/agregarMultimedio', multimedioController.showCreateForm);

router.post('/agregarMultimedio', multimedioController.createMultimedio);

router.get('/', multimedioController.listMultimedios);

router.get('/editarMultimedio/:id', multimedioController.showEditForm);

router.put('/:id', multimedioController.updateMultimedio);

router.delete('/:id', multimedioController.deleteMultimedio);

module.exports = router;
