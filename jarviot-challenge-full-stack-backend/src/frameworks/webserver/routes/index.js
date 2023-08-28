
const  userAuth = require('./userRouter/userRouter')
const {google} = require('googleapis');
const routes = (app)=>{

    app.use('/api/google/',userAuth)


}

module.exports =  routes