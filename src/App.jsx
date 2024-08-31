import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>useState Explained!</h1>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App