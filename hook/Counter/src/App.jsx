import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // let counter = 5
  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1)
    }
    // console.log("Clicked", counter);
    // counter = counter + 1 ;
  }

  const removeValue = () =>{
    if(counter > 0){
      setCounter(counter - 1)
    }
  }
  return (
    <>
    <h1>React Counter</h1>
    <br />
    <h2>Counter Value {counter}</h2>
    <br />
    <button
    onClick={addValue}>Add Value : {counter}</button>
    <br />
    <br />
    <button
    onClick={removeValue}>Remove Value : {counter}</button>
    <footer>Footer value : {counter}</footer>
    </>
  )
}

export default App
