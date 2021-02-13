const mongoose = require('mongoose');

const orderTrackingSchema = new mongoose.Schema(
    {
	    orderItem_id:  {type: String, default: ""},
		order_Status:   {type: String, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);

const OrderTracking = module.exports = mongoose.model('OrderTracking', orderTrackingSchema);

