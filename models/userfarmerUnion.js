const mongoose = require('mongoose');

const userfarmerUnionSchema = new mongoose.Schema(
    {
	    name:  {type: String, default: ""},
		memberCount:   {type: Number, default: 0},
		representetive_id:  {type: String, default: ""},
	    created_date: { type: Date, default: Date.now },
	    updated_date: { type: Date, default: Date.now },
	},
);


const UserfarmerUnion = module.exports = mongoose.model('UserfarmerUnion', userfarmerUnionSchema);
