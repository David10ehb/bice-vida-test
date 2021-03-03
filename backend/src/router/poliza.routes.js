const express = require('express');
const routePoliza = express.Router();
const {calculoPoliza} = require('../controllers/poliza/poliza');

routePoliza.get('/poliza', calculoPoliza);

module.exports = routePoliza;
