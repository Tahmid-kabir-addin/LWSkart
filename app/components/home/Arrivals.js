import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import ProductCard from "../ProductCard";

export default async function Arrivals({ lang }) {
  const dict = await getDictionary(lang);
  let products = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`
  ).then((res) => res.json());
  // sort the products by date
  products = products.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  // get the top 4 products
  products = products.slice(0, 4);
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        {dict.arrivals}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} lang={lang} />
        ))}
      </div>
    </div>
  );
}
