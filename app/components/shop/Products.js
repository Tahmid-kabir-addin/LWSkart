import ProductCard from "../ProductCard";

export default function Products({ products }) {
  // const products = await getProductsOnQuery()
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
