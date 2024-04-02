// import { useEffect, useState } from "react";
// import Header from "./Header";
// import Product from "./Product";
// import axios from "axios";
// import { useLocation } from "react-router-dom";


// export default function Productbycategory(){
//     // const [categoryname,setcategoryname] = useState("")
//     const [Productlist,setProductlist] = useState([])
    
//     const { state } = useLocation()
//     // console.log(state);
//     const categoryName = state;
//     // console.log(categoryName);
//     const categoryURL = 'http://localhost:3000/product/viewbycategoryname'
//     useEffect(()=>{
//         axios.post(categoryURL,{categoryName})
//         .then(response=>{
//             console.log(response.data.category[0].products);
//             setProductlist(response.data.category[0].products)
//         })
//         .catch(err=>{
//             console.log(err);
//         })
//     },[])

//     return<>
//         <Header/>
//         {/* <Product Productlist={Productlist}/> */}
//     </>
// }