const mongoose = require('mongoose');

const produceSchema = new mongoose.Schema(
	{
		product_id: {type:String, default: ""},
		produceCategory_id:  {type: String, default: ""},
		farm_id:  {type: String, default: ""},
		name: {type: String, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);

const Produce = module.exports = mongoose.model('Produce', produceSchema);
