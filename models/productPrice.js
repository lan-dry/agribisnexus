const mongoose = require('mongoose');

const productPriceSchema = new mongoose.Schema(
	{
		price:   {type: Number, default: 0},
		description:  {type: String, default: ""},
		produce_id:  {type: String, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);

const ProductPrice = module.exports = mongoose.model('ProductPrice', productPriceSchema);

