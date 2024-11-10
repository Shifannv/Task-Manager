
import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './Component/Footer'
import Home from './pages/Home'
import PageNotound from './pages/PageNotound'
import LandPage from './pages/LandPage'


function App() {
  

  return (
    <>
    
    <Routes>
      <Route path='/' element={<LandPage/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='' element={<PageNotound/>}/>
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App
