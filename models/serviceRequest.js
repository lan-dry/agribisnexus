const mongoose = require('mongoose');

const serviceRequestSchema = new mongoose.Schema(
    {
	    address_id:  {type: String, default: ""},
        user_id:   {type: String, default: ""},
        serviceTracking_id:   {type: String, default: ""},
        servicePtovide_id:   {type: String, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);

const ServiceRequest = module.exports = mongoose.model('ServiceRequest', serviceRequestSchema);

