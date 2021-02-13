const mongoose = require('mongoose');

const produceCategorySchema = new mongoose.Schema(
	{
	    farm_Coordinates:  {type: Number, default: ""},
		produceCategoryType_id:   {type: String, default: ""},
		name:  {type: String, default: ""},
        maturity_Season:  {type: String, default: ""},
		time_to_matirity: {type: String, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);

const ProduceCategory = module.exports = mongoose.model('ProduceCategory', produceCategorySchema);

