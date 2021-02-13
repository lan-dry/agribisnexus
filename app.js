const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config/init')
 
//routes 
const userRoutes = require('./api/routes/user');
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.use(config.cors);
app.use(config.initializeDB);

app.use('/user', userRoutes);
 
module.exports = app;