import ProductCard from "../ProductCard";

export default function Products({ products }) {
  // const products = await getProductsOnQuery()
  if (products.length === 0) {
    return (
      <div className="col-span-3">
        <p className="text-center text-2xl">No products found</p>
        <p className="text-center text-xl">Please try resetting the filters.</p>
      </div>
    );
  }
  return (
    <div className="col-span-3">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
