import axiosConfig from "../config/axiosConfig";

const useApi = ()=>{
    const googleAccessPermission = async()=>{
        try{
            console.log("reached here")
           return  await axiosConfig.get('/api/google/auth')

        }catch(err){
            console.log(err)
            throw Error(`${err.response.data.message}`)
        }
    }
    const redirectToBackend = async(redirect)=>{
        try{
            return await axiosConfig.get('/api/google/redirect'+redirect)
     
            }catch(error){
              console.log(error)
              throw Error(`${error.response.data.message}`)
            }
    }

    const fetchDataList = async()=>{
        try{
            return await axiosConfig.get('/api/google/fetchList')
     
            }catch(error){
              console.log(error)
              throw Error(`${error.response.data.message}`)
            }

    }
    const revokeApi = async()=>{
      try{
          return await axiosConfig.delete('/api/google/revoke')
   
          }catch(error){
            console.log(error)
            throw Error(`${error.response.data.message}`)
          }

  }
    return {googleAccessPermission , redirectToBackend , fetchDataList , revokeApi }
}
export default useApi