const express = require('express');
const router = express.Router();
const locutorController = require('../controllers/locutorController');

router.get('/agregarLocutor', locutorController.showCreateForm);

router.post('/agregarLocutor', locutorController.createLocutor);

router.get('/', locutorController.listLocutores);

router.get('/editarLocutor/:id', locutorController.showEditForm);

router.put('/:id', locutorController.updateLocutor);

router.delete('/:id', locutorController.deleteLocutor);

module.exports = router;
