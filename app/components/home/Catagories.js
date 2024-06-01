import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import Image from "next/image";
import Link from "next/link";

export default async function Catagories({ lang }) {
  const dict = await getDictionary(lang);
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        {dict.shopByCategory}
      </h2>
      <div className="grid grid-cols-3 gap-3">
        <div className="relative rounded-sm overflow-hidden group">
          <Image
            placeholder="blur"
            blurDataURL="/assets/images/blurImage.jpg"
            src="/assets/images/category/category-1.jpg"
            alt="category 1"
            className="w-full"
            width={64}
            height={64}
            unoptimized
          />
          <Link
            href="/shop/Bedroom Accessories"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            {dict.bedroom}
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image
            placeholder="blur"
            blurDataURL="/assets/images/blurImage.jpg"
            src="/assets/images/category/category-2.jpg"
            alt="category 1"
            className="w-full"
            fill
          />
          <Link
            href="/shop/Mattress"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            {dict.mattress}
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image
            placeholder="blur"
            blurDataURL="/assets/images/blurImage.jpg"
            src="/assets/images/category/category-3.jpg"
            alt="category 1"
            className="w-full"
            width={64}
            height={64}
            unoptimized
          />
          <Link
            href="/shop/Outdoor"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            {dict.outdoor}
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image
            placeholder="blur"
            blurDataURL="/assets/images/blurImage.jpg"
            src="/assets/images/category/category-4.jpg"
            alt="category 1"
            className="w-full"
            width={64}
            height={64}
            unoptimized
          />
          <Link
            href="/shop/Sofa"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            {dict.sofa}
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image
            placeholder="blur"
            blurDataURL="/assets/images/blurImage.jpg"
            src="/assets/images/category/category-5.jpg"
            alt="category 1"
            className="w-full"
            width={64}
            height={64}
            unoptimized
          />
          <Link
            href="/shop/Living Room Accessories"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            {dict.livingroom}
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image
            placeholder="blur"
            blurDataURL="/assets/images/blurImage.jpg"
            src="/assets/images/category/category-6.jpg"
            alt="category 1"
            className="w-full"
            width={64}
            height={64}
            unoptimized
          />
          <Link
            href="/shop/Kitchen Accessories"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            {dict.kitchen}
          </Link>
        </div>
      </div>
    </div>
  );
}
