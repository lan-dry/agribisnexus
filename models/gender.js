const mongoose = require('mongoose');


genderSchema = new mongoose.Schema(
	{
		name:  {type: String,unique: true, default: ""}, // female,male
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);


const Gender = module.exports = mongoose.model('Gender', genderSchema);