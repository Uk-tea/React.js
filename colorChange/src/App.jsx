import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#212121")


  return (
      <div className='w-full h-screen duration-200 bg-purple-500'
      style={{backgroundColor: color}}>
  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
 <div className='flex flex-wrap justify-center gap-3 shadow-lg rounded-xl bg-transparent border-1 border-white shadow-5xl px-3 py-2'>
  <button className='outline-none px-10 py-4 bg-red-600 rounded text-white shadow-xl'
  onClick={() => setColor("red")}
  >Red</button>
  <button className='outline-none px-10 py-4 bg-green-600 rounded text-white shadow-xl'
   onClick={() => setColor("green")}>Green</button>
  <button className='outline-none px-10 py-4 bg-yellow-600 rounded text-white shadow-xl'
   onClick={() => setColor("gold")}>Yellow</button>
  <button className='outline-none px-10 py-4 bg-purple-600 rounded text-white shadow-xl'
   onClick={() => setColor("purple")}>Purple</button>
  <button className='outline-none px-10 py-4 bg-blue-600 rounded text-white shadow-xl'
   onClick={() => setColor("blue")}>Blue</button>
  <button className='outline-none px-10 py-4 bg-indigo-600 rounded text-white shadow-xl'
   onClick={() => setColor("indigo")}>Indigo</button>
  <button className='outline-none px-10 py-4 bg-pink-600 rounded text-white shadow-xl'
   onClick={() => setColor("pink")}>Pink</button>
 </div>
      </div>
  </div>
  )
}

export default App
