const mongoose = require('mongoose');

const authenticationSchema = new mongoose.Schema(
	{
	    user_id:  {type: String, default: ""},
		password:   {type: String, default: ""},
		role_id:  {type: String, default: ""},
		activation_status: {type: Boolean, default: false},
		verification_status:  {type: String, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);


const Authentication = module.exports = mongoose.model('Authentication', authenticationSchema);

