// routes/route.js
const express = require('express');
const router = express.Router();
const calculadoraController = require('../controller/calculadora');

router.post('/calculadora', calculadoraController.fCalculo);

module.exports = router;
