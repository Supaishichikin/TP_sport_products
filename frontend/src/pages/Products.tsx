import { useEffect, useState } from "react";
import { getAllProducts } from "../api/api";

interface Product {
  _id: string;
  name: string;
  quantity: number;
  sport: string;
  price: number;
  image: {
    type: string;
    data: any; // TODO: trouver un meilleur type
  };
}

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

function SearchBar() {
  return (
    <form className="w-full max-w-5xl mx-auto">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
        />
        <button
          type="submit"
          className="text-gray-900/50 hover:text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
}

function ProductCardsList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* product cards */}
      {products.map((product: Product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  );
}

// TODO: Fix image
function ProductCard({ _id, name, quantity, sport, price, image }: Product) {
  return (
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
  );
}
