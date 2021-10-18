// const { date } = require("joi");
const mongoose = require("mongoose");
const Joi = require('joi');

function validateEmployee(employee){
    const schema={
        employeeCode:Joi.number().min(1).required(),
        employeeName:Joi.string().min(2).max(50).required(),
        employeeSize:Joi.string().min(0).max(7).required()
    }
    return Joi.validate(employee,schema)
}

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  nationalId:{
      type:Number,
      required:true,
      max:16,
      min:16
  },
  code:{
    type:String,
    required:true,
    default:"EMP"
   },
   phoneNumber:{
       type:Number,
       required:true
   },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  dateOfBirth:{
      type:Date,
      required:true
  },
  status:{
      type:String,
      required:true
  },
  position:{
      type:String,
      required:true
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
