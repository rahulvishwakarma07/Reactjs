import { Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
// import Home from './Component/Home'
import About from './Component/About'
import Product from './Component/Product'
import Newproduct from './Component/Newproduct'
import Featuredproduct from './Component/Featuredproduct'

export default function App() {
  return <>
    <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/about' element={<About />} />
      <Route path='/product' element={<Product />}>
          <Route index  element={<Newproduct/>}/>
          <Route path='featuredproduct' element={<Featuredproduct/>}/>
      </Route>
    </Routes>
  </>
}