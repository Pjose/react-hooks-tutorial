import { useState } from 'react'

const UseStateEx = () => {
    const [count, setCount] = useState(0)

    return (
      <div className="card">
        <h1>useState Explained!</h1>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    )
}

export default UseStateEx