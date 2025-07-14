import React from 'react'
import { useState } from 'react';
import ColorList from './components/Colorlist';

const App = () => {

  const [bgColor, SetBgColor] = useState("bg-black");
  const [selectedColor, setSelectedColor] = useState("Black");


  const handleColorChange = (newColorClass,newColorName) => {
    SetBgColor(newColorClass);
    setSelectedColor(newColorName)
  };


  return (
    <div className={`h-screen w-screen flex flex-col items-center justify-between ${ bgColor } p-14`}>
      <span className='text-3xl h-18 w-1/4 rounded-3xl flex items-center justify-center font-semibold bg-white'>Selected Color : {selectedColor}</span>
      <ColorList onColorClick={handleColorChange} />
    </div>
  )
}

export default App;