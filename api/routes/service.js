var express = require('express');
var servicerouter = express.Router();
module.exports = servicerouter;

// define the functions to the user
const ServiceController = require('../Controllers/serviceRegisterController');
const service =  new ServiceController();

/// Good one at the botom..
/**
 * POST create /user
 */
servicerouter.post('/new/service', async (req, res, next) => {
    const records= await service.createService(req, res); //save a new user         
    res.status(201).json(records)
});

/**
 * GET all users
 */
servicerouter.post('/get/service', async (req, res, next) => {
    const records = await service.getService(req, res);        
    res.status(201).json(records)
});