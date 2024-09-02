import { useEffect, useState } from 'react'

const UseEffectEx = () => {
    const [counter, setCounter] = useState(0)

  useEffect(() => {
    // The code to run
    console.log("The counter is:", counter)

    // Optional return function (clean-up function)
    return () => {
      console.log("I am being cleaned up!")
    }
  }, [counter]) // The dependency array - dependencies to listen to

  return (
    <div className="card">
        <h2>useEffect Explained!</h2>
        <h3>Counter: {counter}</h3>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
  )
}

export default UseEffectEx