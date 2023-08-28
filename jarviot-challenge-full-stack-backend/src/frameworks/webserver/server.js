const dotenvConfig = require('../../dotenvConfig')

const serverConfig = (app)=>{
    const port =  dotenvConfig.port 
    app.listen(port , ()=>{
        console.log(`Server listening at ${port}`)
    })
}

module.exports = serverConfig 