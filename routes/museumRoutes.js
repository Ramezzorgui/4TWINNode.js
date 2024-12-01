const express = require('express');
const router = express.Router();
const museumController = require('../controller/museumController');

router.post('/museumcreate', museumController.createMuseum);

router.get('/museums', museumController.getMuseums);

router.get('/museums/:id', museumController.getMuseumById);

router.put('/museums/:id', museumController.updateMuseum);

router.delete('/museums/:id', museumController.deleteMuseum);

module.exports = router;
