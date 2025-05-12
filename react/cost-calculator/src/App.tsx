import SplitScreen from "@/components/common/layouts/split-screen";
import CartShowcase from "@/features/cart/components/cart-showcase";
import ProductShowcase from "@/features/products/components/product-showcase";

function App() {
  return (
    <SplitScreen leftWeight={65} rightWeight={25}>
      <ProductShowcase />
      <CartShowcase />
    </SplitScreen>
  );
}

export default App;
