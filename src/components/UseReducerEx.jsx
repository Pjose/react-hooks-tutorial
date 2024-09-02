import { useReducer } from 'react'

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const UseReducerEx = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
      <div className='card'>
            <h2>useReducer Explained!</h2>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
        </div>
  )
}

export default UseReducerEx