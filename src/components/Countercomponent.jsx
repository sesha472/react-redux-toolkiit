

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementbygivenvalue, incrimentbyasync } from '../redux/counterslice';

const Countercomponent = () => {
    const [inputnumber, setinputnumber] = useState("")
    console.log(inputnumber);
    
    const data= useSelector((data)=>data.namecounter.count);
    const dispatch= useDispatch()
  return (
    <div>
        <h1>counter value: {data}</h1>

        <button  onClick={()=> dispatch(increment())} >increment</button>
        <button onClick={ (data>0) ?()=>dispatch(decrement()):null}>decrement</button>
         
        <button  onClick={ ()=>dispatch(incrementbygivenvalue(Number(inputnumber)))}>
            add with number</button>
        <input
         type='text'
         onChange={(e)=>setinputnumber(e.target.value)}
         value={inputnumber}   />
         
         <button onClick={()=>dispatch(incrimentbyasync(Number(inputnumber)))}>add with async funtion</button>
        
    </div>
  )
}

export default Countercomponent
