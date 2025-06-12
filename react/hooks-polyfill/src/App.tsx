import { useState } from "react";
import "./App.css";
import { useCustomMemo } from "./hooks/useCustomMemo";

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const squaredValue = useCustomMemo(() => {
    console.log("Expensive Operation");
    return counter1 * counter1;
  }, [counter1]);

  return (
    <div className="container">
      <h2>Counter1: {counter1}</h2>
      <h2>Counter1 SquaredValue: {squaredValue}</h2>
      <button onClick={() => setCounter1((prev) => prev + 1)}>
        Increment Counter1
      </button>

      <hr style={{ margin: "2rem" }} />

      <h2>Counter2: {counter2}</h2>
      <button onClick={() => setCounter2((prev) => prev + 1)}>
        Increment Counter2
      </button>
    </div>
  );
}

export default App;
