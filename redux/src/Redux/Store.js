import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./DataSlice";
import Counterslice from "./Counterslice";
import Productslice from "./Productslice";
import Categoryslice from "./Categoryslice";
import Category from "../Component/Category";

const store = configureStore({
    reducer:{
        data: DataSlice,
        Counter:Counterslice,
        productlist : Productslice,
        Category : Categoryslice
    }
})

export default store