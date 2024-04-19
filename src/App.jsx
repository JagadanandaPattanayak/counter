import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count => count - 1);
    }
  };

  return (
    <div className="container">
      <div className="app-content">
        <button className="button" onClick={increment}>+</button>
        <span className="count">{count}</span>
        <button className="button" onClick={decrement}>-</button>
        <button className="button reset-button" onClick={() => { setCount(0) }}>Reset</button>
      </div>
    </div>
  );
}

export default App;

