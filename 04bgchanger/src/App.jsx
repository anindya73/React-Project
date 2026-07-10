import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const[ color, setColor ] = useState("olive");
  function changeColor(color){
    setColor(color);
  }
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 w-full">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
          <button 
          onClick={()=>changeColor('red')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-red-600">
            Red
          </button>
          <button 
          onClick={()=>changeColor('blue')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-blue-600">
            Blue
          </button>
          <button 
          onClick={()=>changeColor('green')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-green-600">
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
