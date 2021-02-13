var express = require('express');
var rolerouter = express.Router();
module.exports = rolerouter;

// define the functions to the user
const RoleController = require('../Controllers/roleRegisterController');
const role =  new RoleController();

/// Good one at the botom..
/**
 * POST create /user
 */
rolerouter.post('/new/role', async (req, res, next) => {
    const records = await role.createRole(req, res); //save a new user         
    res.status(201).json(records)
});

/**
 * GET all users
 */
rolerouter.get('/get/role', async (req, res, next) => {
    const records = await role.getRole(req, res);        
    res.status(201).json(records)
});