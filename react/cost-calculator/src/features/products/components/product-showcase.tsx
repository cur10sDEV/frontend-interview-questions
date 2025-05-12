import { useCartActions } from "@/features/cart/hooks/use-cart";
import ProductsLoader from "@/features/products/components/loaders/product-loader";
import ProductCard from "@/features/products/components/product-card";
import { useGetProducts } from "@/features/products/hooks/use-get-products";
import type { IProduct } from "@/features/products/types/product";
import { ShoppingBag } from "lucide-react";

const ProductShowcase = () => {
  const { products, isLoading, error } = useGetProducts();

  const { addItemToCart } = useCartActions();

  if (isLoading) {
    return <ProductsLoader />;
  }

  if (error) {
    return (
      <section className="grid grid-cols-3 gap-6 p-4">
        <h1>Something's wrong!!!</h1>
      </section>
    );
  }

  const handleAddToCart = (product: IProduct) => {
    addItemToCart({
      id: product.id,
      title: product.title,
      quantity: 1,
      price: product.price,
      image: product.images[0] || "",
    });
  };

  return (
    <section className="flex flex-col items-start py-4">
      <div className="flex gap-2 items-center justify-center text-2xl">
        <ShoppingBag />
        <h1>Products</h1>
      </div>
      <div className="grid grid-cols-3 gap-6 py-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
