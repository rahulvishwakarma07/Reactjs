import { useLocation } from "react-router-dom"
import { BsCurrencyRupee } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";
import  {toast, ToastContainer } from 'react-toastify'
import Home from "./Home";
import ReactImageMagnify from 'react-image-magnify'
import Header from "./Header";
import axios from "axios";
export default function ViewMore() {
    const { state } = useLocation();
    const [image, setImage] = useState("")
    console.log(image + " state img")
    let imgArray = state.imageArray.split(" ");
    const change = (img) => {
        let currentImg = document.getElementById("mainImg")
        let temp = currentImg.src;
        currentImg.src = img;
        img = temp;
    }

    const addTocart=(state)=>{
        const cartURL = 'http://localhost:3000/cart/addtocart'
        const userId = sessionStorage.getItem('user_id');
        // window.alert(productId) 
        const productId = state.id
        axios.post(cartURL,{userId,productId})
        .then(response=>{
            toast.success(response.data.message)
        })
        .catch(err=>{
            toast.error("Item already added....")
        })

    }

    return <>
        <ToastContainer/>
        <Header />

        <div className="container " id="main">
            <div className="border mb-5" style={{boxShadow:'0 0 5px 5px gray'}} id="mainDiv">
                <div id="div1">
                    {imgArray.map((img, index) => <img width='100px' height='100px' className="mt-3 ml-1" onClick={() => change(img)} src={img} />)}
                </div>

                <div id="div2" className="mt-5">
                    <img id="mainImg" width='450px' height='450px' src={state.thumbnail} alt="main" /><br />
                    {/* <div id="mainImg">
                        <ReactImageMagnify className="img" {...{
                            smallImage: {
                                alt: 'main',
                                isFluidWidth: true,
                                src: state.thumbnail
                            },
                            largeImage: {
                                src: state.thumbnail,
                                width: 1000,
                                height: 1000
                            }
                        }} />
                    </div> */}

                </div>
                <div id="div3" className="mt-5 p-4">
                    <h2 className="mt-4 mb-4 fs-1" style={{ fontWeight: 'bold' }}>{state.title}</h2>
                    <span className="bg-success p-2 text-light">{state.rating}&nbsp;&nbsp;<FaStar /></span>
                    <h3 className="mt-4 fs-4">{state.description}</h3>
                    <h4 className="mt-4 fw-bold ">Discount: {state.discountPercentage}%</h4>
                    <span className="text-success" style={{ fontSize: "30px", fontWeight: 'bold' }}> Price <span className="text-danger"><BsCurrencyRupee />{state.price}</span></span>
                    <span style={{ fontSize: '20px' }}>&nbsp;&nbsp;<del>{state.price}</del></span>
                    <div >
                        <button style={{ width: "200px", height: '50px' }} className="btn btn-warning mt-5 text-white fw-bold" onClick={()=>{addTocart(state)}}>Add to cart</button>
                        <button style={{ width: "200px", height: '50px' }} className="btn btn-primary ms-3 mt-5 fw-bold">Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}   