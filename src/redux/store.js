import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import listSlice from "./listSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import catsSlice from "./catSlice";



const store=configureStore({
    reducer:{
        user:userSlice,
        student:listSlice,
        products:productSlice,
        cart:cartSlice,
        cats:catsSlice
    }
})

export default store