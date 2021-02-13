const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
	{  
	    productspecification_id:  {type: String, default: ""},
		produce_id:  {type: String, default: ""},
		productPrice_id:  {type: String, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);


const Product = module.exports = mongoose.model('Product', productSchema);

