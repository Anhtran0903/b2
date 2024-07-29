import { createSlice } from "@reduxjs/toolkit"



const initialState={
    student:[
        {id:1,name:"le van tho",checked:false},
        {id:2,name:"le van tho",checked:false},
        {id:3,name:"le van meo",checked:false},
        {id:4,name:"le van cao",checked:false}
    ]
}

const listSlice=createSlice({
    name:"student",
    initialState,

    reducers:{
        addNew(state,action){
        state.student=[ ...state.student,{id:state.student.length+2,name:action.payload,checked:false}]
    },
    deleteStudent(state,action){
        state.student=state.student.filter(item=>item.id!==action.payload)
    },
    recheck(state,action){
        state.student=state.student.map(item=>item.id===action.payload ?{...item,checked:!item.checked}:item)
    }

}
    
})

export const {addNew,deleteStudent,recheck}=listSlice.actions
export default listSlice.reducer;