import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

export default function ProductCardsList({
  products,
}: {
  products: Product[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* product cards */}
      {products.map((product: Product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  );
}
