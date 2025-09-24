import './App.css'
import Navbar from './components/ui/Navbar'
import './index.css'
import Background from './pages/Background'
import Home from './pages/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Solution from './pages/Solution'
import About from './pages/About'
import Conatct from './pages/Conatct'
import Footer from './components/ui/Footer'
import FarmerPortal from './pages/FarmerPortal'
import LabPortal from './pages/LabPortal'
import Features from './pages/Features'
import ManufacturerPortal from './pages/ManufacturerPortal'
import TrackProduct from './pages/TrackProduct'

function App() {
  

  return (
    <>
      <Router>
        <Navbar /> 

        <Routes>
          
          <Route path='/' Component={Home}></Route>
          <Route path='/background' Component={Background}></Route>
          <Route path='/solution' Component={Solution}></Route>
          <Route path='/features' Component={Features}></Route>
          <Route path='/farmer-portal' Component={FarmerPortal}></Route>
          <Route path='/lab-portal' Component={LabPortal}></Route>
          <Route path='/manufacturer-portal' Component={ManufacturerPortal}></Route>
          <Route path='/track-product' Component={TrackProduct}></Route>
          <Route path='/about' Component={About}></Route>

        </Routes>

        <Footer />
        
      </Router>
      
    </>
  )
}

export default App;
