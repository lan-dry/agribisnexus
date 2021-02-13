var express = require('express');
var employeerouter = express.Router();
module.exports = employeerouter;

// define the functions to the user
const employeeController = require('../Controllers/employeeRegisterController');
const employee =  new employeeController();

/// Good one at the botom..
/**
 * POST create /user
 */
employeerouter.post('/new/employee', async (req, res, next) => {
    const records = await employee.createEmployee(req, res); //save a new user         
    res.status(201).json(records)
});

/**
 * GET all users
 */
employeerouter.get('/get/employee', async (req, res, next) => {
    const records = await employee.getEmployee(req, res);        
    res.status(201).json(records);
});

// define the functions to the user
const farmemployeeController = require('../Controllers/employeeRegisterController');
const farmemployee =  new farmemployeeController();


/**
 * GET all users
 */
employeerouter.get('/get/employees', async (req, res, next) => {
    const records = await farmemployee.getEmployee(req, res);        
    res.status(201).json(records);
});

/**
 * GET all employer employees
 */
employeerouter.get('/get/userEmployee/:user_id', async (req, res, next) => {
    const records = await farmemployee.getUserEmployee(req, res);        
    res.status(201).json(records);
});