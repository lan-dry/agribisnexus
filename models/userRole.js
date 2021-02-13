const mongoose = require('mongoose');


const userRoleSchema = new mongoose.Schema(
	{
		name:  {type: String,unique: true, default: ""}, // admin,farmer,driver
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);


const UserRole = module.exports = mongoose.model('UseerRole', userRoleSchema);
