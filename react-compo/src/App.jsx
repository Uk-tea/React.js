
import './App.css'
import Button from './Componants/Button' 


function App() {


  return (
    <>
    <h1 className=' flex justify-center itmes-cenrt text-3xl font-medium underline w-screens'>Hellow World</h1>
    <div className='h-screen w-screen flex justify-center items-center gap-10'>

      <Button label ="Home Page"/>
      <Button/>
      <Button/>

    {/* <button className='border-2 rounded-md p-4 hover:bg-zinc-200'>Home Page</button>
    <button className='border-2 rounded-md p-4 hover:bg-zinc-200'>About Us</button>
    <button className='border-2 rounded-md p-4 hover:bg-zinc-200'>Contact Us</button>
    <button className='border-2 rounded-md p-4 hover:bg-zinc-200'>Services</button> */}
    </div>
     
    </>
  )
}

export default App
