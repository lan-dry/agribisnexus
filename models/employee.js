const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
	{
	    employee_number:  {type: String, default: ""},
		status:   {type: String, default: ""},
		date_joined:  {type: Date, default: Date.now},
		payment_method:  {type: String, default: ""},
		payment_schedule: {type: String, default: ""},
        user_id:   {type: String, default: ""},
        employment_type:  {type: String, default: ""},
		date_of_birth:  {type: Date, default: Date.now},
		farm_id:  {type: String, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now }
	},
);

const Farm = module.exports = mongoose.model('Employee', employeeSchema);

