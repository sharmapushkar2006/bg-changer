import { useState } from 'react'

function App() {
  let [color, setColor] = useState("aqua")

  return (
    <div className='w-full h-screen' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'> 
          <button className='bg-red-300 px-2 py-2 rounded-xl cursor-pointer'onClick={()=>setColor('red')}>Red</button>
          <button className='bg-orange-300 px-2 py-2 rounded-xl cursor-pointer'onClick={()=>setColor('orange')}>Orange</button>
          <button className='bg-pink-300 px-2 py-2 rounded-xl cursor-pointer'onClick={()=>setColor('pink')}>Pink</button>
          <button className='bg-green-300 px-2 py-2 rounded-xl cursor-pointer'onClick={()=>setColor('green')}>Green</button>
          <button className='bg-blue-300 px-2 py-2 rounded-xl cursor-pointer'onClick={()=>setColor('blue')}>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
