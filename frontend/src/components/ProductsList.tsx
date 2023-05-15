import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

interface ProductCardsListProps {
  products: Product[];
}

export default function ProductCardsList({ products }: ProductCardsListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product: Product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  );
}
