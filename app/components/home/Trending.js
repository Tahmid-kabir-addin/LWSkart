import ProductCard from "../ProductCard";

export default async function Trending() {
  let products = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`
  ).then((res) => res.json());
  products = products.filter(
    (product) => product.trending && product.stock > 0
  );
  // get the top 8 trending products
  products = products.slice(0, 8);
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        TRENDING PRODUCTS
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
