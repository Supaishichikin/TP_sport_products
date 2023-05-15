import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/products";
import SearchBar from "../../components/SearchBar";
import ProductsTable from "../../components/ProductsTable";
import { Product } from "../../types/product";

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="relative h-full w-full flex flex-col justify-center items-center">
      <div className="py-6 w-full max-w-7xl mx-auto space-y-8">
        <SearchBar search={search} setSearch={setSearch} />
        <ProductsTable products={filteredProducts} />
      </div>
    </div>
  );
}
