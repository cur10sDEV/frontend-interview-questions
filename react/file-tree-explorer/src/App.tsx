import Left from "./components/layouts/left";
import Right from "./components/layouts/right";
import SplitScreen from "./components/layouts/split-screen";

function App() {
  return (
    <SplitScreen leftWeight={20} rightWeight={80}>
      <Left />
      <Right />
    </SplitScreen>
  );
}

export default App;
