import { useEffect, useState } from "react";
import "./App.css";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const PAGE_LIMIT = 9;

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchProducts = async (
    page = 1,
    limit = 10,
    signal: AbortSignal | null | undefined
  ) => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${
        (page - 1) * limit
      }`,
      {
        signal,
      }
    );
    const data = await res.json();
    setProducts(data.products);
    setTotal(data.total);
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchProducts(currentPage, PAGE_LIMIT, controller.signal);

    return () => controller.abort();
  }, [currentPage]);

  const lastPage = Math.ceil(total / PAGE_LIMIT);

  const selectPageHandler = (page: number) => {
    if (page < 1 || page > lastPage || currentPage === page) return;
    setCurrentPage(page);
  };

  return (
    <>
      <div className="products_container">
        {products.length > 0 &&
          products.map((product) => (
            <div key={product.id} className="product_card">
              <img src={product.thumbnail} alt={product.title} />
              <h1>{product.title}</h1>
            </div>
          ))}
      </div>
      <div className="pagination">
        {currentPage > 1 && (
          <span
            className="page_count page_count_direction_buttons"
            onClick={() => selectPageHandler(currentPage - 1)}
          >
            ◄
          </span>
        )}
        {Array.from({ length: lastPage }, (_, index) => index + 1).map(
          (page) => (
            <span
              key={page}
              className="page_count"
              style={
                currentPage === page
                  ? {
                      color: "black",
                    }
                  : {}
              }
              onClick={() => selectPageHandler(page)}
            >
              {page}
            </span>
          )
        )}
        {currentPage < lastPage && (
          <span
            className="page_count page_count_direction_buttons"
            onClick={() => selectPageHandler(currentPage + 1)}
          >
            ▶
          </span>
        )}
      </div>
    </>
  );
}

export default App;
