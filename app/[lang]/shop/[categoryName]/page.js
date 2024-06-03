import { getProductByCategoryName } from "@/app/actions/ProductActions";
import Products from "@/app/components/shop/Products";
import { dict } from "@/app/dict/dict";
import Link from "next/link";

// export async function generateStaticParams() {
//   return [
//     "Bedroom Accessories",
//     "Mattress",
//     "Outdoor",
//     "Living Room",
//     "Sofa",
//     "Kitchen Accessories",
//   ];
// }

export default async function page({ params: { categoryName, lang } }) {
  categoryName = decodeURIComponent(categoryName);
  const products = await getProductByCategoryName(categoryName);

  return (
    <div>
      <h1 className="text-4xl text-center mt-2">
        {categoryName} {dict(lang, "Products")}
      </h1>
      {products.length === 0 && (
        <div className="text-center text-lg text-gray-600 mt-4">
          <h1>{dict(lang, "No products found in this category.")}</h1>
          {dict(lang, "Find more products")}{" "}
          <Link href={`/${lang}/shop`} className="text-blue-700">
            {dict(lang, "here")}
          </Link>
        </div>
      )}
      <div className="container grid md:grid-cols-3 grid-cols-2 gap-6 pt-4 pb-16 items-center">
        <Products products={products} lang={lang} />
      </div>
    </div>
  );
}
