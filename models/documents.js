const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
    nameNFC:String,
    itemsName:String,
    countt:Number
})

  


module.exports = itemsSchema
//ถ้ามีหลายตัว module.exports = {user,user2,user3}


