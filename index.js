/*const http = require('http');
const app = require('./app');
const { port } = require('./config/index');
 
const port = process.env.PORT || 8080;
 
const server = http.createServer(app);

// Launch app to listen to specified port
server.listen(port, function () {
  console.log("ABN on port " + port);
});*/


//************************************************* Rework this code************************************* */
const config = require( "./config" );
const express = require('express')
var fs = require('fs')
var https = require('https')
var cors = require('cors')
const app = express()


const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};




var originsWhitelist = [
    'http://localhost:4200',      
    'http://abn.agribiznexus.co.za',
    'http://164.160.89.209:3000'
];
var corsOptions = {
  origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}
app.use(cors(corsOptions))
app.use(function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
       res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, PATCH');
          next();
    });

var bodyParser = require('body-parser')

// Import routes
const userRoutes = require('./api/routes/user');
const farmRoutes = require('./api/routes/farm');
const produceRoutes = require('./api/routes/produce');
const serviceRoutes = require('./api/routes/service');
const roleRoutes = require('./api/routes/role');
const employeeRoutes = require('./api/routes/employee');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// Connect to the DB an initialize the app if successful
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect( config.dbUrl, mongooseOptions )
  .then( () => {
    console.log( "Database connection successful --> " + config.dbUrl );
  } )
  .catch( err => {
    //eslint-disable-next-line
    console.error( err );
  } );

var bodyParser = require('body-parser');

// Setup server port
var port = process.env.PORT || 8000;

// Send message for default URL
app.use(express.json())
app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
app.use('/abn', userRoutes);
app.use('/abn', farmRoutes);
app.use('/abn', produceRoutes);
app.use('/abn', serviceRoutes);
app.use('/abn', roleRoutes);
app.use('/abn', employeeRoutes);
// Launch app to listen to specified port
// app.listen(port, function () {
//     console.log("Running ABN on port " + port);
// });
var https_options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};
// https.createServer(https_options, app).listen(port);
https.createServer(https_options, app)
.listen(port, function () {
  console.log("Running ABN on port " + port)
})