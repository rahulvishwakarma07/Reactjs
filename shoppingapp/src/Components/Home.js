import '../App.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
import Product from './Product'
import Category from './Category';
import Header from './Header';


export default function Home() {
    const [productList, setProductList] = useState([])
    const productUrl = "http://localhost:3000/product/view"
    useEffect(() => {
        axios.get(productUrl).then(response => {
            setProductList(response.data.productlist)
            // console.log(response.data.productlist);
        }).catch(err => {
            console.log("Heelo");
            console.log(err);
        })
    }, [])


    return <>
        <Header/>
        <Category  setProductList={setProductList}/>

        <Product productList={productList} />
    </>
}

