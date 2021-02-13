const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
	    firstname:       {type: String, default: ""},
		surname:         {type: String, default: ""},
		farmerUnion_id:  {type: String, default: ""},
        gender_id:       {type: String, default: ""},
		tittle_id:       {type: String, default: ""},
		nationality_id:  {type: String, default: ""},
		ethnic_group_id: {type: String, default: ""},
		race_id:         {type: String, default: ""},
		created_date:    {type: Date, default: Date.now },
		updated_date:    {type: Date, default: Date.now }
		
	},
);

const User = module.exports = mongoose.model('User', userSchema);



