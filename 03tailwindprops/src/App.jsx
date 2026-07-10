import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from '../components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=" text-6xl p-3 rounded-3xl font-bold text-red-500 bg-yellow-300 ">
        Hello Tailwind CSS!
      </h1>
      <Card />
    </>
  );
}

export default App
