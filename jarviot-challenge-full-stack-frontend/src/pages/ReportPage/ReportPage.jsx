import { useEffect, useState } from 'react'
import { FileIcon, defaultStyles } from 'react-file-icon';
import useApi from '../../api/useApi'
import LogoLoader from '../../components/Loader/Loader'
import { useNavigate } from 'react-router-dom';
function ReportPage() {
  const [loading, setLoading] = useState(false)
  const [files, setfiles] = useState([])
  const { fetchDataList, revokeApi } = useApi()
  const navigate = useNavigate()
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    setLoading(true)
    try {

      const response = await fetchDataList()
      console.log(response)
      if (response) {
        setfiles(response.data)
        setLoading(false)

      } else {
        navigate('/')
      }
    } catch (err) {

      alert('No google account signed in')
      setTimeout(() => {
        setLoading(false)
        navigate('/')
      }, 1000)


    }

  }

  const handleRevoke = async () => {
    const response = await revokeApi()
    navigate('/')
  }

  return (
    <div className='w-full h-screen overflow-y-auto bg-black-200 '>
      <div className='bg-[#614BC3] w-full flex flex-col items-center justify-center p-14 px-24 pb-52 '>
        <div className='w-full flex items-center justify-between'>
          <button onClick={handleRevoke} className='p-2 px-5 text-red-500 border-2 border-red-400 hover:text-white hover:bg-red-500 rounded-lg'>
            Revoke Access
          </button>
        </div>
      </div>
      <div className=' av  w-full flex flex-col items-center justify-center px-24 '>
        <div className=' w-full relative  -top-32  bg-white rounded-xl '>
          <section className='p-8'>
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                          >
                            File Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                          >
                            File Type
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Size
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Created by
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Link
                          </th>

                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {files?.map(file => (
                          <tr key={file.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <FileIcon extension={file.fileExtension} {...defaultStyles[file.fileExtension]} />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm truncate font-medium hover:underline hover:text-blue-600  text-gray-900">
                                    <a href={file.webViewLink} target="_blank" rel="noreferrer">  {file.name} </a>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {file.mimeType}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {file.size} kb
                              </div>
                              <div className="text-sm text-gray-900">
                                {file?.storage?.toFixed(3)} %
                              </div>

                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className="px-2 inline-flex text-md leading-5
                      font-semibold rounded-full bg-green-100 text-green-800"
                              >
                                {file.owners[0].emailAddress}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href={file.webViewLink} target="_blank" className="text-indigo-600 hover:text-indigo-900" rel="noreferrer">
                                Link
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </section>

        </div>
      </div>

      <LogoLoader isVisible={loading} />
    </div>
  )
}

export default ReportPage