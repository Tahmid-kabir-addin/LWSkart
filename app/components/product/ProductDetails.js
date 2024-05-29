import { getProductByCategoryName } from "@/app/actions/ProductActions";
import { CartIcon } from "@/public/assets/images/icons/Cart";
import { Star } from "@/public/assets/images/icons/Star";
import { Heart } from "@/public/assets/images/icons/heart";
import { faFire } from "@fortawesome/free-solid-svg-icons"; // Import the trending icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../ProductCard";
import QuantityButtons from "./QuantityButtons";
import SocialShare from "./SocialShare";

export default async function ProductDetails({ product }) {
  let products = await getProductByCategoryName(product?.category);
  products = products
    .filter((p) => p.id !== product?.id && p?.stock > 0)
    .slice(0, 4);

  return (
    <div className="flex flex-col gap-5">
      <div className="container grid grid-cols-2 gap-6">
        <div className="relative">
          {/* Trending Icon */}
          {product?.trending && (
            <div className="absolute top-2 right-2 text-red-500 flex items-center gap-1">
              <FontAwesomeIcon icon={faFire} size="lg" />
              <span className="text-white bg-red-500 px-2 py-1 rounded">
                Trending
              </span>
            </div>
          )}

          <Image
            blurDataURL="/assets/images/blurImage"
            src={product?.image}
            alt={product?.name}
            className="w-full"
            height={96}
            width={96}
            unoptimized
            priority
          />
          <div className="grid grid-cols-5 gap-4 mt-4">
            <Image
              blurDataURL="/assets/images/blurImage"
              src={product?.image}
              alt={product?.name}
              height={32}
              width={32}
              unoptimized
              className="w-full cursor-pointer border border-primary"
            />
            <Image
              blurDataURL="/assets/images/blurImage"
              src="/assets/images/products/product3.jpg"
              alt="product2"
              height={32}
              width={32}
              unoptimized
              className="w-full cursor-pointer border"
            />
            <Image
              blurDataURL="/assets/images/blurImage"
              src="/assets/images/products/product4.jpg"
              alt="product2"
              height={32}
              width={32}
              unoptimized
              className="w-full cursor-pointer border"
            />
            <Image
              blurDataURL="/assets/images/blurImage"
              src="/assets/images/products/product5.jpg"
              alt="product2"
              height={32}
              width={32}
              unoptimized
              className="w-full cursor-pointer border"
            />
            <Image
              blurDataURL="/assets/images/blurImage"
              src="/assets/images/products/product6.jpg"
              alt="product2"
              height={32}
              width={32}
              unoptimized
              className="w-full cursor-pointer border"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">
            {product?.name}
          </h2>
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-sm text-yellow-400">
              {Array.from({ length: parseInt(product?.rating) }).map(
                (_, index) => (
                  <Star key={index} />
                )
              )}
              <span className="text-black text-sm">{product?.rating}</span>
            </div>
            <div className="text-xs text-gray-500 ml-3">
              ({product?.reviewCount} reviews)
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              <span
                className={`${
                  product?.stock > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {product?.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand: </span>
              <span className="text-gray-600">{product?.brand}</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category: </span>
              <span className="text-gray-600">{product?.category}</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">SKU: </span>
              <span className="text-gray-600">{product?.SKU}</span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p className="text-xl text-primary font-semibold">
              ${product?.price}
            </p>
            <p className="text-base text-gray-400 line-through">
              ${product?.compareAtPrice}
            </p>
          </div>

          <p className="mt-4 text-gray-600">{product?.description}</p>

          <QuantityButtons stock={product?.stock} />

          <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
            <Link
              href="#"
              className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
            >
              <span>
                <CartIcon />
              </span>{" "}
              Add to cart
            </Link>
            <Link
              href="#"
              className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
            >
              <span>
                <Heart />
              </span>{" "}
              Wishlist
            </Link>
          </div>
          <SocialShare productId={product?.id} name={product?.name} />
        </div>
      </div>

      <div className="container pb-16 mt-10">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          RELATED PRODUCTS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
