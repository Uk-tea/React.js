import React from 'react'
import { useState } from 'react'
import './App.css' 

const App = () => {

  let [max, setMax] = useState(20);
  let [min, setMin] = useState(0);
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter < max){
      setCounter(counter + 1)
    }
  }
  const removeValue = () => {
    if(counter > min){
      setCounter(counter - 1)
    }
  }

  const resetValue = () => setCounter(min)


  // Dynamic color chnages

let color = "green" 
if(counter >= max){
  color = "red";
}else if (counter >= max - Math.ceil((max - min) * 0.4)) {
    // agar counter last 30% range me ho
    color = "orange";
  };
  return (
    <div className="w-full flex justify-center items-center flex-col gap-6 text-xl font-bold">
      <h1 style={{color}}>React Counter : {counter}</h1>
      <button onClick={addValue}
       disabled={ counter >= max }>Add Value :
        {counter}
        </button>
      <button onClick={removeValue}
       disabled={ counter <= min }>
        Remove Value : {counter}
        </button>
      <button onClick={resetValue}>
        Reset Value
        </button>
        <div className="flex gap-4 justify-center items-center">
          setMin
          <input 
          type="Number"
          value={min}
          placeholder='Set Min Value' 
          onChange={(e) => setMin(Number(e.target.value))}
          className="border p-2 rounded-2xl"
          />
          setMax
          <input type="Number"
          value={max}
          placeholder='Set Max Value' 
          onChange={(e) => setMax(Number(e.target.value))}
          className="border p-2 rounded-2xl"
           />
        </div>
    </div>
  )
}

export default App
