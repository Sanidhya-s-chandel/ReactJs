import React from 'react'
import InputBox from './Components/InputBox'

const App = () => {
  return (
    <div className='h-screen w-full bg-black flex items-center justify-center'>
      <div className='h-1/2 w-1/2 text-center'>
        <h1 className='font-semibold text-white text-4xl mb-8'>Genrate Random Password as Your Need :</h1>
        <InputBox />
      </div>
    </div>
  )
}

export default App