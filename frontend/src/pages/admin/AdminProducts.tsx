import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/products";
import SearchBar from "../../components/SearchBar";
import ProductsTable from "../../components/ProductsTable";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="relative h-full w-full flex flex-col justify-center items-center">
      <div className="py-6 w-full max-w-7xl mx-auto space-y-8">
        <SearchBar />
        <ProductsTable products={products} />
      </div>
    </div>
  );
}
