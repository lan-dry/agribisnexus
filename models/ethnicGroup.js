const mongoose = require('mongoose');


const ethnicGroupSchema = new mongoose.Schema(
	{
		name:  {type: String,unique: true, default: ""}, // african, white,coloured
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);


const EthnicGroup = module.exports = mongoose.model('EthnicGroup', ethnicGroupSchema);