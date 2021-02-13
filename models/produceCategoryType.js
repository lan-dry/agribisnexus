const mongoose = require('mongoose');

const produceCategoryTypeSchema = new mongoose.Schema(
    {
	    name:  {type: String, default: ""},
		image:   {type: Image, default: BINARY },
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);

const ProduceCategoryType = module.exports = mongoose.model('ProduceCategoryType', produceCategoryTypeSchema);

