import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  };
  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
  };

  return (
    <div className="App-header">
      <h1>Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>add</button>
      <br />
      <button onClick={removeValue}>remove</button>
    </div>
  );
}

export default App;
