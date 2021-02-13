const mongoose = require('mongoose');

const serviceProviderSchema = new mongoose.Schema(
    {
	    name:  {type: String, default: ""},
        service_id:   {type: String, default: ""},
        cv:  {type: String, default: ""},
        user_Id:  {type: String, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);

const ServiceProvider = module.exports = mongoose.model('ServiceProvider', serviceProviderSchema);

