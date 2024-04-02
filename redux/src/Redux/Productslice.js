import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Productdata = axios.get('https://dummyjson.com/products')
    .then(response => {
        console.log(response.data.products);
        return response.data.products
    })
    .catch(err => {
        console.log(err);
    })

const slice = createSlice({
    name: 'Productlist',
    initialState: {
        value: Productdata
    }
})

export default slice.reducer