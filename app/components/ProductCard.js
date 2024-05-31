import { Star } from "@/public/assets/images/icons/Star";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faFire } from "@fortawesome/free-solid-svg-icons"; // Import the trending icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import AddToWishlist from "./AddToWishlist";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow rounded overflow-hidden group flex flex-col justify-between">
      <div className="relative w-full hover:scale-110">
        {/* Trending Icon */}
        {product?.trending && (
          <div className="absolute top-2 right-2 text-primary">
            <FontAwesomeIcon icon={faFire} size="lg" />
            <span className="text-white bg-primary px-2 py-1 rounded text-sm ml-1">
              Trending
            </span>
          </div>
        )}

        <Image
          placeholder="blur"
          blurDataURL="/assets/images/blurImage.jpg"
          src={product?.image}
          alt={product?.name}
          className="w-full"
          width={64}
          height={64}
          unoptimized
          priority
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <AddToWishlist product={product} />
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <Link href={`/product/${product?.id}`}>
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {product?.name}
          </h4>
        </Link>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">
            ${product?.price}
          </p>
          <p className="text-sm text-gray-400 line-through">
            ${product?.compareAtPrice}
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            {Array.from({ length: parseInt(product?.rating) }).map(
              (_, index) => (
                <Star key={index} />
              )
            )}
            <span className="text-black text-sm">{product?.rating}</span>
          </div>
          <div className="text-xs text-gray-500 ml-3">
            ({product?.reviewCount})
          </div>
        </div>
      </div>
      <AddToCartButton product={product} />
    </div>
  );
}
