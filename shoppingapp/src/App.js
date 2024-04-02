import Home from './Components/Home';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp';
import 'react-toastify/dist/ReactToastify.css'
import Auth from './Components/Auth';

import SignIn from './Components/SignIn';
import Viewmore from './Components/Viewmore';
import Viewcart from './Components/Viewcart';
// import Productbycategory from './Components/Productbycategory';
// import Category from './Components/Category';
// import Product from './Components/Product';
function App() {
  return <>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/home' element={<Auth><Home/></Auth>} />
      {/* <Route path="/category" element={<Category/>}/> */}
      <Route path='/viewmore' element={<Auth><Viewmore/></Auth>}/>
      <Route path='/viewcart' element={<Auth><Viewcart/></Auth>}/>
      {/* <Route path='/category' element={<Productbycategory/>}/> */}
    </Routes>
  </>
}

export default App;
