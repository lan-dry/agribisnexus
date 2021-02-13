const mongoose = require('mongoose');

const farmSchema = new mongoose.Schema(
	{
	    farm_Coordinates:  {type: String, default: ""},
		surface_Area:   {type: Number, default: 0},
		user_id:  {type: String, default: ""},
		produce_type:  {type: String, default: ""},
		plot_number: {type: Number, default: 0},
		name: {type: String, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);

const Farm = module.exports = mongoose.model('Farm', farmSchema);
