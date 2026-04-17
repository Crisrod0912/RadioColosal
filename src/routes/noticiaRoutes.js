const express = require('express');
const router = express.Router();
const noticiaController = require('../controllers/noticiaController');

router.get('/agregarNoticia', noticiaController.agregarNoticia);

router.get('/', noticiaController.getNoticias);

router.get('/editarNoticia/:id', noticiaController.editarNoticia);

router.delete('/:id', noticiaController.deleteNoticia);

router.post('/agregarNoticia', noticiaController.createNoticias);

router.put('/editarNoticia/:id', noticiaController.updateNoticia);

module.exports = router;
