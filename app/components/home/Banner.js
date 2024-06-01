import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import Link from "next/link";

export default async function Banner({ lang }) {
  console.log("🚀 ~ Banner ~ lang:", lang);
  const dict = await getDictionary(lang);
  return (
    <div className="bg-cover bg-no-repeat bg-center py-36 bg-[url('/assets/images/banner-bg.jpg')]">
      <div className="container">
        <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
          {dict.bestCollectionFor} <br /> {dict.homeDecoration}
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam{" "}
          <br />
          accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
          odio
        </p>
        <div className="mt-12">
          <Link
            href="/shop"
            className="bg-primary border border-primary text-white px-8 py-3 font-medium 
                    rounded-md hover:bg-transparent hover:text-primary"
          >
            {dict.shopNow}
          </Link>
        </div>
      </div>
    </div>
  );
}
