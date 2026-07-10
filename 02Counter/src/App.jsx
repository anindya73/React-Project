import { useState } from 'react'

import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learning React:{ count}</h1>
      <h2>Counter Value:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>{" "}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <p>Footer:{count}</p>
    </>
  )
}

export default App
