const mongoose = require('mongoose')
console.log("bhai modal m agaya hu")
const employeSchema = new mongoose.Schema({
    Name : {type : String, trim :true , required : true},
    Age : {type : Number, trim : true},
    Position : {type : String, trim : true, required : true},
    Salary : {type : Number}

    

})

module.exports = mongoose.model("Employe", employeSchema)