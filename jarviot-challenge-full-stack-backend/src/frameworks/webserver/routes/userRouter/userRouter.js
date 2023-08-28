const express = require('express')
const router = express.Router()
const accessController = require('../../../../adapters/accessController')
const googleServiceInterface = require('../../../../application/services/googleServiceRepo')
const googleService = require('../../../service/googleServices')
const tokenRepo = require('../../../database/mongoDb/repositories/tokenRepo')
const tokenInterface = require('../../../../application/repositories/tokenInterface')


const controller = accessController( 
    googleServiceInterface , googleService ,
    tokenInterface , tokenRepo
)

//-------------------Auth Request ------------------//
router.get('/auth', controller.authRequest)

//-------------------Auth Redirect ------------------//
router.get('/redirect', controller.handleToken)

//-------------------Fetch Files ------------------//
router.get('/fetchList', controller.fetchData)


//-------------------Revoke access------------------//
router.delete('/revoke', controller.revokeAccess)
 
module.exports = router