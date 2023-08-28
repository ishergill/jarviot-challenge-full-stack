import useApi from '../../api/useApi'
function HomePageComponents() {
    const { googleAccessPermission } = useApi()

    const handleAccessPermission = async () => {
        const response = await googleAccessPermission()
        console.log(response)
        window.location.href = response.data.url;
    }
    return (
        <div className='w-full flex justify-center items-center p-5'>
                <button onClick={handleAccessPermission} className='my-14 p-4 bg-white px-5 rounded-md font-semibold hover:bg-orange-400 transition delay-150 duration-300 hover:text-white text-xl   text-[#433188]'><span><img className='w-7 relative -top-0.5 -left-0.5 inline mx-2' src="https://uploads-ssl.webflow.com/633d92770fc68548a10ca623/63ea8b2cb598e84eb4938fd6_google%20drive%20mark.svg" alt="Google Drive logo" /></span> Scan Google Drive</button>
        </div>
    )
}

export default HomePageComponents