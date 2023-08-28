

const googleServiceInterface = (repository) => {

    const googleAuth = () => {
        return repository.googleAuth()

    }
    const handleToken = (code) => {
        return repository.handleToken(code)
    }
    const retrieveDriveData = () => {
        return repository.retrieveDriveData()
    }

    const revokeAccess = () => {
        return repository.revokeAccess()
    }



    return { googleAuth, handleToken, retrieveDriveData , revokeAccess }

}

module.exports = googleServiceInterface