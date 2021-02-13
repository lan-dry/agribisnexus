const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
	{
	    productName_id: {type: String, default: ""},
        quantity_unit: {type: String, default: ""},
        quantity_amount: {type: Number, default: 0},
        unit_price: {type: String, default: ""},
        total_price: {type: String, default:"" },
        packaging:{type: String, default: ""},
        delivery_terms:{type: String, default: ""},
		user_id: {type: String, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
    },
);


const Order = module.exports = mongoose.model('Order', orderSchema);


