import {Routes,Route} from 'react-router-dom'
import Header from './Component/Header'
import Product from './Component/Product'
import About from './Component/About'
import Productlist from './Component/Productlist'

function App(){
    return<>
      <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='product' element={<Product/>}>
            <Route path='productlist' element={<Productlist/>}/>
          </Route>
      </Routes>
  </>
}

export default App