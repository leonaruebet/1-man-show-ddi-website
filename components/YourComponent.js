import React, { useReducer, useEffect } from 'react'

// Define reducer function outside component
const reducer = (state, action) => {
  switch (action.type) {
    // ... your reducer cases
    default:
      return state
  }
}

// Make sure this is a proper functional component
const YourComponent = () => {
  console.log('Component rendering')
  
  useEffect(() => {
    console.log('Component mounted')
    return () => console.log('Component unmounting')
  }, [])

  // Initialize useReducer inside the component
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    // Your JSX here
  )
}

export default YourComponent 