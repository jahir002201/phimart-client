import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <div className="text-2xl font-bold p-4 m-4">Count: {count}</div>
        <button className="btn btn-info" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="btn btn-secondary" onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </>
  )
}

export default App
