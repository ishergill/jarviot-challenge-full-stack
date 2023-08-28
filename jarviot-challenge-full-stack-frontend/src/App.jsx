import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/homePage'
import ReportPage from './pages/ReportPage/ReportPage'

function App() {

  return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/reportPage' element={<ReportPage/>}  />
  </Routes>
  </BrowserRouter>

  )

}

export default App
