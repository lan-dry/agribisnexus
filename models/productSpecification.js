const mongoose = require('mongoose');

const productSpecificationSchema = new mongoose.Schema(
	{   soundProduct_quantity: {type: Number, default: 0},
		cleanProduct_quantity: {type: Number, default: 0},
		freshAppearanceProduct_quantity: {type: Number, default: 0},
		ParchmentProduct_quantity: {type: Number, default: 0},
		PestsProduct_quantity: {type: Number, default: 0},
		PestdamagedProduct_quantity: {type: Number, default: 0},
		ExternalMoistureProduct_quantity: {type: Number, default: 0},
		ForeignSmellProduct_quantity:{type:Number, default: 0},
		CaylxAttachedProduct_quantiy:{type:Number, default:0},
        product_id:  {type: String, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);


const ProductSpecification = module.exports = mongoose.model('ProductSpecification', productSpecificationSchema);
