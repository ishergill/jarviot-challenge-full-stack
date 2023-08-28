const tokenInterface = (repository)=>{

    const addToken = (token)=>{
      return  repository.addToken(token)
    }
    const deleteToken = (tokenId)=>{
      return repository.deleteToken(tokenId)
    }
    return {addToken , deleteToken}
}

module.exports = tokenInterface