const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
    {
	    invoice_id:  {type: String, default: ""},
		payment_confirmation:   {type: String, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);

const Payment = module.exports = mongoose.model('Payment', paymentSchema);

