//connection code of node and mongodb
//1 import mongoose
const mongoose = require('mongoose')

//connection string
mongoose.connect('mongodb://127.0.0.1:27017/ems');


//model creation
const employee = mongoose.model('employee',{
    id:String,
    name:String,
    age:String,
    designation:String,
    salary:String
})

module.exports={
    employee
}