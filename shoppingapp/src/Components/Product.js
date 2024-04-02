import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";



export default function Product(props) {
    const { productList } = props
    const navigate = useNavigate("")
   
    const viewmore=(product)=>{
        navigate('/viewmore',{state:product});
    }

    const addTocart=(productId)=>{
        const cartURL = 'http://localhost:3000/cart/addtocart'
        const userId = sessionStorage.getItem('user_id');
        // window.alert(productId) 
        axios.post(cartURL,{userId,productId})
        .then(response=>{
            toast.success(response.data.message)
        })
        .catch(err=>{
            toast.error("Something went wrong")
        })

    }
    return <>
        <ToastContainer/>
        <div className="container mt-5 ">
            <div className="row">
                {/* {productList.map((product, index) => <div className="col-md-4 p-3"  key={index}>
                    <div className="d-flex flex-column align-items-center"  style={{ height: "430px", boxShadow: '0 0 5px grey' }}>
                        <img src={product.thumbnail} style={{ height: "250px", width: '100%' }} />
                        <h4 className="text-center mt-2">{product.title.slice(0, 24)}</h4>
                        <p className="mt-2 mb-2 text-center">Price : <b className="text-success">{product.price} Rs.</b></p>
                        <small className="text-primary" id="view" onClick={()=>viewmore(product)}>View more</small>
                        <button style={{ width: "90%" }} className="btn btn-secondary text-white mt-3">Add To Cart</button>
                    </div>
                </div>)} */}
                {productList.map((product, index) => <div className="col-md-4 ms-4 mb-5" id="card" key={index}>
                    <div className="d-flex flex-column align-items-center " id="child-card" style={{  boxShadow: '5 5 10px grey' }}>
                        <img src={product.thumbnail} style={{ height: "250px", width: '100%' }} />
                        <h4 className="text-center text-white mt-2">{product.title.slice(0, 24)}</h4>
                        <p className="mt-2 mb-2 text-center text-white">Price : <b className="text-info">{product.price} Rs.</b></p>
                        <small className="text-primary" id="view" onClick={()=>viewmore(product)}>View more</small>
                        <button style={{ width: "90%" }} className="btn text-white fw-bold mt-3" id="addtocart" onClick={()=>addTocart(product.id)}>Add To Cart</button>
                    </div>
                </div>)}
            </div>
        </div>
    </>
}