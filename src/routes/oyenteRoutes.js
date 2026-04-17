const express = require('express');
const router = express.Router();
const oyenteController = require('../controllers/oyenteController');

router.get('/agregarOyente', oyenteController.showCreateForm);

router.post('/agregarOyente', oyenteController.createOyente);

router.get('/', oyenteController.listOyentes);

router.get('/editarOyente/:id', oyenteController.showEditForm);

router.put('/:id', oyenteController.updateOyente);

router.delete('/:id', oyenteController.deleteOyente);

module.exports = router;
