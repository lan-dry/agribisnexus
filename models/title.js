const mongoose = require('mongoose');


const titleSchema = new mongoose.Schema(
	{
		name:  {type: String,unique: true, default: ""}, // miss, mrs, mr
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);


const Title = module.exports = mongoose.model('Title', titleSchema);