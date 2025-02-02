


import { configureStore } from "@reduxjs/toolkit";
import counterreducer from './counterslice'

 const store =configureStore({
    reducer:{
        namecounter:counterreducer,
    },
  })


   export default store;
 