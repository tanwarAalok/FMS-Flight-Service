const express = require('express');
const { InfoController } = require('../../controllers');
const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');
const airportRoutes = require('./airport-routes')

const router = express.Router();

router.get('/info', InfoController.info);

router.use('/airplane', airplaneRoutes);

router.use('/city', cityRoutes);

router.use("/airport", airportRoutes);

module.exports = router;