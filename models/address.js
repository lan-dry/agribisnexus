const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema(
	{
	    region:  {type: String, default: ""},
		streetName:   {type: String, default: ""},
		houseNumber:  {type: Number, default: 0},
		country:  {type: String, default: ""},
		continent: {type: String, default: ""},
	    user_id:   {type: String, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now }
	},
);

const Address = module.exports = mongoose.model('Address', addressSchema);

