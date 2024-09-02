import { useMemo, useState } from 'react'
import { initialItems } from '../util/utils'

const UseMemoEx = () => {
    const [count, setCount] = useState(0)
    const [items] = useState(initialItems)

    // Code before useMemo is used:
    /*
    items.find((item) => item.isSelected)
    */
    
    // Code after useMemo
    const selectedItem = useMemo(
        () => items.find((item) => item.isSelected),
        [items],
    )
    
    // Code with multiple dependencies
    // NB: Be careful to give useMemo the proper dependencies
    /*
    const selectedItem = useMemo(
        () => items.find((item) => item.id === count),
        [count, items],
    )
    */

  return (
    <div className='card'>
        <h2>useMemo Explained!</h2>
          <h3>Count: {count}</h3>
          <h3>Selected Item: {selectedItem?.id}</h3>
          <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default UseMemoEx