const mongoose = require('mongoose');

const serviceRatesSchema = new mongoose.Schema(
    {
	    description:  {type: String, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);

const ServiceRates = module.exports = mongoose.model('ServiceRates', serviceRatesSchema);
