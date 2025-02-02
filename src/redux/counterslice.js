import { createSlice } from "@reduxjs/toolkit"


 
  const counterslice= createSlice({
    name:"counter",
    initialState : {
        count:0
     },
    reducers:{

         increment:(state,action)=>{
            state.count=state.count+1
         },

         decrement:(state,action)=>{
            state.count -=1
         },

         incrementbygivenvalue :(state,action)=>{
            state.count +=action.payload
         }
          
        }
    })

     export const incrimentbyasync= (value)=>{
         return (cb)=> {
        setTimeout(() => {
             cb(incrementbygivenvalue(value))
        }, 2000);
     }}
  export const {increment,decrement,incrementbygivenvalue}= counterslice.actions
    export default counterslice.reducer;