const mongoose = require('mongoose');


nationalitySchema = new mongoose.Schema(
	{
		name:  {type: String,unique: true, default: ""}, // South African
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);


const Nationality = module.exports = mongoose.model('Nationality', nationalitySchema);