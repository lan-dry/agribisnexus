const mongoose = require('mongoose');


personnelRoleSchema = new mongoose.Schema(
	{
		name:  {type: String,unique: true, default: ""}, // manager,general worker
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);


const PersonnelRole = module.exports = mongoose.model('PersonnelRole', personnelRoleSchema);
