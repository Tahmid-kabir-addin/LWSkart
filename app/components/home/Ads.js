import Image from "next/image";
import Link from "next/link";

export default function Ads({ lang }) {
  return (
    <div className="container pb-16">
      <Link href={`/${lang}/shop`}>
        <Image
          placeholder="blur"
          blurDataURL="/assets/images/blurImage.jpg"
          src="/assets/images/offer.jpg"
          alt="ads"
          className="w-full"
          width={96}
          height={96}
          quality={100}
          unoptimized
        />
      </Link>
    </div>
  );
}
