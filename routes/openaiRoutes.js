const express = require('express');
const openaiController = require('../controller/openaiController');
const router = express.Router();




router.post('/generateimage',openaiController.generateimage)


module.exports = router 