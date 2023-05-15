export default function Products() {
  return (
    <div className="relative h-full w-full flex flex-col justify-center items-center">
      <div className="py-6 w-full max-w-7xl mx-auto space-y-8">
        {/* TODO: Barre de recherche */}
        <input type="text" placeholder="Rechercher un produit" />
        <div className="flex gap-x-4">
          {/* TODO: aside: checkbox filter */}
          <aside className=""></aside>
          {/* Liste de produits */}
          <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* TODO: Product cards */}
              {[...Array(5)].map((_, i) => (
                <div key={i}>product card</div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
