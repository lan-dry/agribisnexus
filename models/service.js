const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
    {
	    name:  {type: String, default: ""},
		serviceRate_id:   {type: String, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);

const Service = module.exports = mongoose.model('Service', serviceSchema);

