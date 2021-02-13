const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema(
    {
	    order_id:  {type: String, default: ""},
		transactionType_id:   {type: String, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);

const Invoice = module.exports = mongoose.model('Invoice', invoiceSchema);

