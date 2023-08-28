const { googleAuthUseCase, handleTokenUseCase, fetchListUseCase, revokeUsecase } = require("../application/usecase/accessUsecase")
const { frontend_url } = require("../dotenvConfig")

const accessController = (
    googleServiceInterface , googleService ,
    tokenInterface , tokenRepo
)=>{
    const googleRepo = googleServiceInterface(googleService())

    const tokenRepository = tokenInterface(tokenRepo())
   
    const authRequest = async(req ,res)=>{
        try{
            console.log("Reached inside the auth Request")
            const url = await googleAuthUseCase(googleRepo)
            res.json({url})
        }catch(err)
        {
            console.log(err)
            res.status(500).json({ error: "An error occurred" });
        }
    }
    const handleToken = async(req ,res)=>{
        try{
            console.log(req.query)
            const { code } = req.query;
        const response = await handleTokenUseCase(googleRepo , code , tokenRepository)
        res.cookie('tokenId', JSON.stringify(response._id));
        res.redirect(frontend_url + '/reportPage');
        }catch(err)
        {
            console.log(err)
            res.status(500).json({ error: "An error occurred" });
        }
    }

    const fetchData = async(req ,res)=>{
        try{
        const response = await fetchListUseCase(googleRepo)
        if(response)
        {
            res.json(response)
        }else{
            res.status(404).json({ error: "No Token Present" });
        }
        }catch(err)
        {
            console.log(err)
            res.status(500).json({ error: "An error occurred" });
        }
    }

    const revokeAccess =  async(req ,res)=>{
        try{
            const tokenId = JSON.parse(req.cookies.tokenId);
        const response = await revokeUsecase(googleRepo , tokenRepository , tokenId)
        res.json(response)
        }catch(err)
        {
            console.log(err)
            res.status(500).json({ error: "An error occurred" });
        }
    }

 return {authRequest , handleToken , fetchData , revokeAccess}
}

module.exports = accessController