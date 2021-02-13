const mongoose = require('mongoose');

const methodSchema = new mongoose.Schema(
    {
	    name:  {type: String,unique:true, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);

const Method = module.exports = mongoose.model('Method', methodSchema);

