const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:String,
    address:String
})

const Users = new mongoose.model("Person",userSchema)
module.exports = Users