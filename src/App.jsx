import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")



  return (
    <div className="w-full h-screen duration-200 m-auto"style={{backgroundColor: color}}>

      <h1 className=' text-center text-3xl py-8 text-white'>Background Changer</h1>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 

      <div className='flex flex-wrap justify-center gap-3 bg-white shadow-lg rounded-full px-1.5 py-1.5'>

        <button 
        className='px-4 py-1 rounded-full outline-none text-white shadow-lg' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>red</button>

        <button 
          className='px-4 py-1 rounded-full outline-none text-white shadow-lg' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>green</button>

        <button 
          className='px-4 py-1 rounded-full outline-none text-white shadow-lg' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>blue</button>
          
        <button 
          className='px-4 py-1 rounded-full outline-none shadow-lg' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>yellow</button>
          
        <button 
          className='px-4 py-1 rounded-full outline-none shadow-lg' style={{backgroundColor:"violet"}} onClick={()=>setColor("violet")}>violet</button>

      </div>
      </div>
     
    </div>
  )
}

export default App
