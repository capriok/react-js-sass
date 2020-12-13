import React, { useState } from 'react';

const App = () => {
  const [count, setcount] = useState(0)

  function inc() {
    setcount(count => count + 1)
  }
  function dec() {
    setcount(count => count - 1)
  }

  return (
    <div className="app">
      <h1>Bare React App</h1>
      <strong>{count}</strong>
      <div>
        <button onClick={() => inc()}></button>
        <button onClick={() => dec()}></button>
      </div>
    </div>
  )
}

export default App;
