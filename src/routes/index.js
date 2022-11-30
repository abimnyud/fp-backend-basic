const express = require('express');

const exampleRoutes = require('./exampleRoutes')



const router = express.Router();

/**
 * Example Route
 */
router.use('/example', exampleRoutes);

module.exports = router;