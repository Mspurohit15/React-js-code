import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  const addValue = ()=>{
    console.log('valued added : ', counter)
    if(counter < 20){
      setCounter(counter + 1)
    }
  }

  const removeValue =() =>{
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1>React Counter App : </h1>
    <h2> Counter Value : {counter}</h2>
    <button onClick={addValue}> Add Value  : {counter}</button> 
    <br/>
    <button onClick={removeValue}>decrease Value  : {counter }</button>
      
    </>
  )
}

export default App
