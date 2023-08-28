const mongoose = require('mongoose')
const tokenModel = require('../models/tokenModel')

const tokenRepo = ()=>{

    const addToken = async(token)=>{
        console.log(token , "Reached Repository")
        return await tokenModel.create(token)
    }
    const deleteToken = async(tokenId)=>{
        console.log(tokenId , "Reached delete")
        return await tokenModel.findByIdAndRemove( tokenId )
    }
    return {addToken , deleteToken}
}

module.exports = tokenRepo