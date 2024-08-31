# React Hooks Tutorial
React Hooks - are functions that let you “hook into” React state and lifecycle features from function components. 
            - Hooks don't work inside classes.

> [!NOTE]
> Hooks let you use different React features from your components.
> You can either use the built-in Hooks or combine them to build your own.

## State Hooks
 - ### useState
   useState - let's you add a state variable to your component.
   ```
   const [state, setState] = useState(initialState)
   ```

 - ### useReducer
   useReducer - let's you add a reducer to your component.
   ```
   const [state, dispatch] = useReducer(reducer, initialArg, init?)
   ```

## Effect Hook
 - ### useEffect
   useEffect - connects a component to an external system.
  ```
  useEffect(setup, dependencies?)
  ```

## Performance Hooks
 - ### useMemo
   useMemo - lets you cache the result of an expensive calculation.
   ```
   const cachedValue = useMemo(calculateValue, dependencies)
   ```
   
 - ### useCallback
   useCallback - lets you cache a function definition before passing it down to an optimized component.
   ```
   const cachedFn = useCallback(fn, dependencies)
   ```
