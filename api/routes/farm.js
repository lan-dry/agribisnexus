var express = require('express');
var farmrouter = express.Router();
module.exports = farmrouter;

// define the functions to the user
const FarmController = require('../Controllers/farmRegisterController');
const farm =  new FarmController();

/// Good one at the botom..
/**
 * POST create /user
 */
farmrouter.post('/new/farm', async (req, res, next) => {
    const records = await farm.createFarm(req, res); //save a new user         
    res.status(201).json(records)
});

/**
 * GET all users
 */
farmrouter.get('/get/farm/:user_id', async (req, res, next) => {
    const records = await farm.getFarm(req, res);        
    res.status(201).json(records);
});

/**
 * farms using user_id
 */
// farmrouter.get('/get/user_farms/:user_id', async (req, res, next) => {
//     const records = await farm.getUserFarm(req, res);        
//     res.status(201).json(records);
// });