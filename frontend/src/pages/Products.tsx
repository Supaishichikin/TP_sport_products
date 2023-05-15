import { useEffect, useState } from "react";
import { getAllProducts } from "../api/api";

import ProductCardsList from "../components/ProductsList";
import SearchBar from "../components/SearchBar";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="relative h-full w-full flex flex-col justify-center items-center">
      <div className="py-6 w-full max-w-7xl mx-auto space-y-8">
        {/* TODO: Fonctionnement search bar */}
        <SearchBar />
        <div className="flex gap-x-4">
          {/* TODO: aside: checkbox filter */}
          <aside className=""></aside>
          {/* Liste de produits */}
          <main className="flex-1">
            <ProductCardsList products={products} />
          </main>
        </div>
      </div>
    </div>
  );
}
