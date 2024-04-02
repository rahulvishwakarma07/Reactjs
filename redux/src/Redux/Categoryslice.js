import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchcategory = createAsyncThunk('fetchcategory',async ()=>{
    try{
        let response =  await axios.get('https://dummyjson.com/products/categories')
        console.log(response);
        return response.data
    }catch(err){
        console.log(err);
    }   
})

const slice = createSlice({
    name : 'CatgorySlice',
    initialState:{
        categoryList : [],
        error : false,
        isLoading : false
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchcategory.pending,(state,action)=>{
            state.isLoading = true;
        }).addCase(fetchcategory.fulfilled,(state,action)=>{
            state.categoryList = action.payload;
            state.isLoading = false;
        }).addCase(fetchcategory.rejected,(state,action)=>{
            state.isLoading =  false;
            state.error = 'Oops ! something went wrong'
        })
        
    }
})

export default slice.reducer