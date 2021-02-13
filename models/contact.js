const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
	{
	    phoneNumber:  {type: String, default: ""},
		fax:  {type: String, default: ""},
		emailAddress:  {type: String, default: ""},
		postalAddress:  {type: String, default: ""},
		user_id: {type: String, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
    },
);


const Contact = module.exports = mongoose.model('Contact', contactSchema);

