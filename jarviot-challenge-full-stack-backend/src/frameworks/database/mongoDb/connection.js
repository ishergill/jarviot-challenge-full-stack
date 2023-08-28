const mongoose = require( 'mongoose')
const dotenvConfig = require( '../../../dotenvConfig')


const dbOption  = { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}
 const dbConnection = () => {
    mongoose.connect(dotenvConfig.atlas_url).then(() => {
        console.log("Connection has been established")
    }).catch((err) => {
        console.error(err)
    })
}

module.exports =  dbConnection