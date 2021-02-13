const mongoose = require('mongoose');

const serviceTrackingSchema = new mongoose.Schema(
    {
	    status:  {type: String, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);

const ServiceTracking = module.exports = mongoose.model('ServiceTracking', serviceTrackingSchema);

