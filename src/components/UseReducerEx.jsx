import { useReducer } from 'react'

const initialState = {
    count: 0,
    error: null,
};

function reducer(state, action) {
  switch (action.type) {
      case 'INCREMENT': {
          const newCount = state.count + 1;
          const hasError = newCount > 5;
          return {
              count: hasError ? state.count : newCount,
              error: hasError ? 'Maximum reached' : null,
          };
      }
    case 'DECREMENT': {
        const newCount = state.count - 1;
        const hasError = newCount < 0;
        return {
            count: hasError ? state.count : newCount,
            error: hasError ? 'Minimum reached' : null,
        };
    }
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
            {state.error && <div className='mt-2 text-red-600'>{state.error}</div>}
        </div>
  )
}

export default UseReducerEx