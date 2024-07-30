import { createSlice } from "@reduxjs/toolkit"



const cartSlice = createSlice({
    name: "cart",
    initialState:{
        item:[],
        status:'idle',
        error:null
    },

    reducers: {
        addCart:(state, action)=> {
  
            state.item.push(action.payload);
           console.log( state.item);
        },
        deleteCart:(state,action)=>{
            state.item= state.item.filter(item=>item.id !==action.payload)  ;       
   
            },
            clearCart:(state)=>{
              state.item=[];
            }

    }

})

export const {addCart,deleteCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;