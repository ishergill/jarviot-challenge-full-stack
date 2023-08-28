

module.exports.googleAuthUseCase = async(googleRepo)=>{
   const response = await  googleRepo.googleAuth()
   return response

}


module.exports.handleTokenUseCase = async(googleRepo , code , tokenRepository)=>{
    const response = await googleRepo.handleToken(code)
    const data = await tokenRepository.addToken(response)
    console.log(data)
    return data
}

module.exports.fetchListUseCase = async(googleRepo)=>{
    const data = await googleRepo.retrieveDriveData()
  return data
}

module.exports.revokeUsecase = async(googleRepo ,  tokenRepository , tokenId) =>{
  const data = await tokenRepository.deleteToken(tokenId)
  const response = await googleRepo.revokeAccess()
  return response
}