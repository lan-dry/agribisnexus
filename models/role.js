const mongoose = require('mongoose');


const roleSchema = new mongoose.Schema(
	{
		type:  {type: String,unique: true, default: ""},
		farm_id: {type: String,unique: true, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);


const Role = module.exports = mongoose.model('Role', roleSchema);
