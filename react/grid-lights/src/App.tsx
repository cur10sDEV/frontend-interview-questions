import { useState } from "react";
import Cell from "./components/cell";

// 1 represents to put the cell, 0 means not to
const config = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

function App() {
  const [order, setOrder] = useState<number[]>([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const deactiveCells = () => {
    setIsDeactivating(true);
    // deactivate all with an interval between - in reverse order
    const intervalId = setInterval(() => {
      setOrder((originalOrder) => {
        // deep copy
        const newOrder = originalOrder.slice();
        // remove the last added
        newOrder.pop();

        // if all deactivated then clear timer
        if (newOrder.length === 0) {
          clearInterval(intervalId);
          setIsDeactivating(false);
        }

        // update state with new order after deactivating the last cell
        return newOrder;
      });
    }, 300);
  };

  const activateCell = (index: number) => {
    // dont add if already there
    if (order.includes(index)) return;

    // store the order they were clicked
    const newOrder = [...order, index];
    setOrder(newOrder);

    // if all are filled (that are fillable), deactive all of them
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactiveCells();
    }
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 border p-4">
      {config
        .flat(1)
        .map((c, index) =>
          c ? (
            <Cell
              key={index}
              index={index}
              filled={order.includes(index)}
              color="green"
              onClick={() => activateCell(index)}
              disabled={isDeactivating}
              label={`Cell ${index}`}
            />
          ) : (
            <span key={index} />
          )
        )}
    </div>
  );
}

export default App;
