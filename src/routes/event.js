const express = require('express');
const uploadFunction = require('../middleware/imageUpload');
const { addEvent } = require('../controllers/event.controller');

const route = express.Router();
route.post('/events', uploadFunction.array('images', 5), addEvent);

module.exports = route;