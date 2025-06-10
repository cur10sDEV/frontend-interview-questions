import { useEffect, useState } from "react";
import ProgressBar from "./components/progress-bar";

function App() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(intervalId);
          return prev;
        }
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="space-y-4 flex flex-col items-center">
      <h1 className="text-xl">Progress Bar</h1>
      <ProgressBar value={percentage} />
    </div>
  );
}

export default App;
