import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Category({setProductList}) {
    const [Category, setCategory] = useState([]);
    const categoryURL = 'http://localhost:3000/category/viewbycategory'
    useEffect(() => {
        axios.get(categoryURL).then(response => {
            // console.log(response.data.data);
            setCategory(response.data.data);
        })  
            .catch(err => {
                console.log(err);
            })
    }, [])

    const allcategory=()=>{
        console.log("Hii Rahul what are you doing");
        axios.get("http://localhost:3000/product/view")
        .then(response=>{
            setProductList(response.data.productlist)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const navigate = useNavigate()
    const getbycategoryName=(categoryName)=>{
        const productURL = 'http://localhost:3000/product/viewbycategoryname' 
        axios.post(productURL,{categoryName})
        .then(response=>{
                setProductList(response.data.category[0].products)
        })
        .catch(err=>{
            console.log(err);
        })
        // navigate("/category",{state:categoryName})
    }

    return <>
        <div className="container mt-3 ">
            
            <h3 className="ms-3  fw-bold">Browse by Category</h3>
            <button className="btn btn-dark ms-2 mt-3 mb-2" onClick={allcategory} >All Category</button>
            <div className="row">
                {Category.map((category, index) => <div key={index} id="category" className="col-md-3 ">
                    <div onClick={()=>getbycategoryName(category.categoryname)} className="d-flex justify-content-center align-items-center text-white bg-dark fw-bold"  style={{ fontSize: '12px', height: "50px", margin: "10px", boxShadow: "5px 5px 5px grey" }}>{category.categoryname.toUpperCase()}</div>
                </div>)}
            </div>
        </div>
    </>
}