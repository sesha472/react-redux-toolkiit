import React from 'react'
import './App.css'
import Countercomponent from './components/Countercomponent'
import { useSelector } from 'react-redux'
function App() {
   const count= useSelector((statefromstore)=>statefromstore.namecounter.count)
  return (
    <>
    <h1>this is app componnet {count} </h1>
     <Countercomponent/>
        </>
  )
}

export default App
