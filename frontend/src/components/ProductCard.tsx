import { Link } from "react-router-dom";
import type { Product } from "../types/product";

// TODO: Fix image
export default function ProductCard({
  _id,
  name,
  quantity,
  sport,
  price,
  image,
}: Product) {
  return (
    <Link to={`/products/${_id}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://picsum.photos/400"
            alt={name}
          />
        </div>
        <div className="px-4 py-2">
          <h3 className="text-gray-900 font-medium text-sm">{name}</h3>
          <p className="text-gray-500 text-xs">{price} €</p>
        </div>
      </div>
    </Link>
  );
}
