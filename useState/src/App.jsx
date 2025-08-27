import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  let [min, setMin] = useState(0)
  let [max, setMax] = useState(20)

  const addValue = ()=>{
    if(counter <= max){
      setCounter(counter + 1)
    }
  };
  const delValue = () =>{
    if(counter >= min){
      setCounter(counter - 1)
    }
  };
  const resetValue = () => setCounter(min)

  let color = "green"
  if(counter >= max){
    color = "red"
  }else if (counter >= max - Math.ceil(max - min) * 0.4){
    color = "Orange"
  }

  return (
    <>
    <div className='flex justify-center items-center flex-col gap-5'>
      <h1 style={{color}}>Counter App : </h1>
      <button onClick={addValue} disabled={counter >= max}>Add Value : {counter}</button>
      <button onClick={delValue} disabled={counter <= min}>Del Value : {counter} </button>
      <button onClick={resetValue}>Reset Value : {counter}</button>

      <div className='flex justify-center items-center gap-4'>
        Min Value <input 
        type="Number"
        placeholder='Set Min Value'
        value={min}
        onChange={(e) =>setMin(Number(e.target.value))}
        className='border p-2 rounded-xl'
        />
        Max Value <input 
        type="Number"
        placeholder='Set Min Value'
        value={max}
        onChange={(e) =>setMax(Number(e.target.value))}
        className='border p-2 rounded-xl'
        />
      </div>



    </div>

    </>
  )
}

export default App
