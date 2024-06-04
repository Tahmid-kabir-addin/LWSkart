import { getProductById } from "@/app/actions/ProductActions";
import ProductDetails from "@/app/components/product/ProductDetails";
import { dict } from "@/app/dict/dict";
import { House } from "@/public/assets/images/icons/House";
import { ChevronRight } from "@/public/assets/images/icons/ShevronRight";
import Link from "next/link";

export async function generateMetadata({ params: { productId } }) {
  const product = await getProductById(productId);
  return {
    title: product?.name,
    description: `${product?.description}`,
  };
}

export default async function page({ params }) {
  const product = await getProductById(params.productId);
  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <Link href={`/${params.lang}`} className="text-primary text-base">
          <House />
        </Link>
        <span className="text-sm text-gray-400">
          <ChevronRight />
        </span>
        <p className="text-gray-600 font-medium">
          {dict(params.lang, "Product")}
        </p>
      </div>
      <ProductDetails product={product} lang={params.lang} />
    </>
  );
}
