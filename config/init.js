const mongoose = require('mongoose');
//const { mongoUrl } = require('./index');
 
module.exports = {
    initializeDB: async () => {
        mongoose.connect( 'mongodb://localhost/abn' /*mongoUrl*/, { useNewUrlParser: true });
        const bodyParser = require('body-parser');
        mongoose.Promise = global.Promise;
        console.log("ABN initialize");
    },
 
    cors: async (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
                    "Access-Control-Allow-Headers",
                    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
                  );
        if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
        }
        next();
    }
}