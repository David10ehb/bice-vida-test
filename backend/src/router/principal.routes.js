const express = require('express');
const router = express.Router();
const routePoliza = require('./poliza.routes');

router.use(routePoliza);

module.exports = router;