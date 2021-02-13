var express = require('express');
var producerouter = express.Router();
module.exports = producerouter;

// define the functions to the user
const ProduceController = require('../Controllers/produceRegisterController');
const produce =  new ProduceController();

/// Good one at the botom..
/**
 * POST create /user
 */
producerouter.post('/new/produce', async (req, res, next) => {
    const records = await produce.createProduce(req, res); //save a new user         
    res.status(201).json(records)
});

/**
 * GET all users
 */
producerouter.get('/get/produce', async (req, res, next) => {
    const records = await produce.getProduce(req, res);        
    res.status(201).json(records)
});