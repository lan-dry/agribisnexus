const mongoose = require('mongoose');

const transactionTypeSchema = new mongoose.Schema(
    {
	    bank:  {type: String, default: ""},
		method_id:   {type: String, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);

const TransactionType = module.exports = mongoose.model('TransactionType', transactionTypeSchema);

