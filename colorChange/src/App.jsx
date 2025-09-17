import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#212121")

  const colors = [
    { name: "Red", value: "red", class: "bg-red-600" },
    { name: "Green", value: "green", class: "bg-green-600" },
    { name: "Indigo", value: "indigo", class: "bg-indigo-600" },
    { name: "Purple", value: "pruple", class: "bg-purple-600" },
    { name: "yellow", value: "yellow", class: "bg-yellow-600" },
  ]


  return (
  <div className='w-full h-screen duration-200 bg-purple-600'
  style={{backgroundColor:color}}
  >
    <div className='flex flex-wrap fixed justify-center items-center bottom-12 inset-x-0 p-2'>
      <div className=' flex flex-wrap justify-center gap-3 shadow-lg rounded-xl bg-transparent border-1 border-white shadow-5xl px-3 py-2'>
        {colors.map((c)=>(
          <button
           key={c.value}
           className={`outline-none px-10 py-4 ${c.class}
          rounded text-white shadow-xl`}
          onClick={()=>setColor(c.value)}
           >
            {c.name}
          </button>
          
        ))}
        <button
  className="outline-none px-10 py-4 bg-gradient-to-r from-purple-800  to-purple-500 rounded text-white shadow-xl"
  onClick={() => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
    setColor(randomColor)

  }}
>
  Random
</button>
      </div>
    </div>
  </div>

  )
}

export default App
