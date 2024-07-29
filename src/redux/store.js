import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import listSlice from "./listSlice";

const store=configureStore({
    reducer:{
        user:userSlice,
        student:listSlice
    }
})

export default store