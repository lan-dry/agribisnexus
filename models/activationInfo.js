//created by landry on 23/01/2021
const mongoose = require('mongoose');

const activationInfoSchema = new mongoose.Schema(
  {
      user_id:   {type: String, default: ""},
      activation_code:  {type: Number, default: 0},
      Confirmation_code:  {type: String, default: ""},
      created_date: { type: Date, default: Date.now },
      updated_date: { type: Date, default: Date.now }
  },
);

const ActivationInfo = module.exports = mongoose.model('ActivationInfo', activationInfoSchema);

