var express = require('express');
var router = express.Router();
module.exports = router;

// define the home page route
router.get('/', function (req, res) {
    res.json({
        status: 200,
        message: 'ABN API'
    });
});

// define the functions to the user
const UserController = require('../Controllers/userRegisterController');
const user =  new UserController();

/// Good one at the botom..
/**
 * POST create /user
 */
router.post('/new/user', async (req, res, next) => {
    const records = await user.createUser(req, res); //save a new user         
    res.status(201).json(records)
});

/**
 * GET all users
 */
router.post('/get/user', async (req, res, next) => {
    const records = await user.getUser(req, res);        
    res.status(201).json(records)
});

// define the functions to the user
const LoginController = require('../Controllers/userLoginController');
const login =  new LoginController();

/**
 * POST create /user
 */
router.post('/login', async (req, res, next) => {
    const records = await login.loginUser(req, res); //login user        
    res.status(201).json(records)
});


/**
 * Activate user account
 */
router.post('/user/activateAccount', async (req, res, next) => {
    const records = await user.activate(req, res); //save a new user         
    res.status(201).json(records)
});






