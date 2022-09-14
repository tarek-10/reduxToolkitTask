import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name:"counter",

    initialState:{
        count:0
    },
    reducers:{
        incrementFun:(state)=>{
            state.count += 1
        },
        decrementFun:(state)=>{
            state.count -= 1
        }
    }
})

export const {incrementFun , decrementFun}  = counterSlice.actions;
export default counterSlice.reducer;