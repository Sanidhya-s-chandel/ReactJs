import React from "react";
import { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(0)

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl capitalize font-semibold">
        The Count for the button clicked : {counter}
      </h1>
      <div className="flex items-center justify-between w-[40%] mt-12">
        <button onClick={()=> setCounter(counter + 1)} className="bg-blue-500 capitalize hover:bg-green-500 px-4 py-2 rounded-lg text-lg text-white font-semibold">
          click to increase the count
        </button>
        <button onClick={()=> setCounter(counter - 1)} className="bg-blue-500 capitalize hover:bg-red-500 px-4 py-2 rounded-lg text-lg text-white font-semibold">
          click to decrease the count
        </button>
      </div>
    </div>
  );
};

export default App;