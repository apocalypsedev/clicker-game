import React, { useState } from 'react'

function App() {
  const [score, setScore]= useState(0)

  const handleClick = ()=>{
    setScore(score + 1)
  }
  console.log(score);
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-slate-500 text-white'>
      <h1 className='text-4xl font-bold mb-4'>Clicker</h1>
      <p className='text-2xl mb-4'>Score : {score}</p>
      <button 
      onClick={handleClick}
      className='bg-[#141414] hover:bg-[#141419] text-white font-bold px-4 py-3 rounded'
      >
        Click
      </button>
    </div>
  )
}

export default App