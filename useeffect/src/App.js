import {Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Gallery from './Component/Gallery'
import Portfolio from './Component/Portfolio'
import Products from './Component/Products'
export default function App(){
  
    return<>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/> 
        <Route path='/products' element={<Products />}/>
      </Routes>
    </>
}