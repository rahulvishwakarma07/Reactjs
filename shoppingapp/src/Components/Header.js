
import axios from 'axios'
import logo from '../Components/logo512.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {

    const [currentusercartitem, setcurrentusercartitem] = useState([])

    const navigate = useNavigate()
    

    return <>
        <div className='container-fluid p-3 bg-dark  header text-white'>
            <header className='row'>
                <div className='col-md-3' id='logo'>
                    <img src={logo} width={100} height={80} alt='no image' />
                    <h3>React <br /> Application</h3>
                </div>
                <div className='col-md-6 p-3' id='search'>
                    <input placeholder='Search' />
                </div>
                <div className='col-md-3 p-3 ' id='option' >
                    <span onClick={()=>navigate('/viewcart')}>View Cart</span>
                    <span >SignOut</span>
                </div>
            </header>
        </div>
    </>
}