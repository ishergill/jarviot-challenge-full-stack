const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
    access_token: String,
    refresh_token : String ,
    id_token : String,

})
const tokenModel = mongoose.model('tokens',tokenSchema)

module.exports = tokenModel