const mongoose = require('mongoose');


const raceSchema = new mongoose.Schema(
	{
		name:  {type: String,unique: true, default: ""}, // black, white,indian,coloured
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);


const Race = module.exports = mongoose.model('Race', raceSchema);