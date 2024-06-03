import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../[lang]/dictionaries/dictionaries";
import LogoutButton from "./LogoutButton";

export default async function Navbar({ lang }) {
  // const path = usePathname();
  let isLoginPage = false;
  // if (path.includes("login") || path.includes("register")) isLoginPage = true;
  const session = await auth();
  const dict = await getDictionary(lang);

  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
          <span className="text-white">
            <Image
              blurDataURL="/assets/images/blurImage.jpg"
              src="/assets/images/icons/bars.svg"
              width={24}
              height={24}
              alt="bars"
              Cart
              in
              bangla
            ></Image>
          </span>
          <span className="capitalize ml-2 text-white hidden">
            All Categories
          </span>

          {/* <!-- dropdown --> */}
          <div
            className="absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[600px]"
            // style="width: 300px;"
          >
            <Link
              href={`/${lang}/shop/Sofa`}
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image
                blurDataURL="/assets/images/blurImage.jpg"
                src="/assets/images/icons/sofa.svg"
                alt="sofa"
                className="w-5 h-5 object-contain"
                width={16}
                height={16}
              />
              <span className="ml-6 text-gray-600 text-sm">{dict.sofa}</span>
            </Link>
            <Link
              href={`/${lang}/shop/Living Room Accessories`}
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image
                blurDataURL="/assets/images/blurImage.jpg"
                src="/assets/images/icons/terrace.svg"
                alt="terrace"
                className="w-5 h-5 object-contain"
                width={16}
                height={16}
              />
              <span className="ml-6 text-gray-600 text-sm">
                {dict.livingroom}
              </span>
            </Link>
            <Link
              href={`/${lang}/shop/Bedroom Accessories`}
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image
                blurDataURL="/assets/images/blurImage.jpg"
                src="/assets/images/icons/bed.svg"
                alt="bed"
                className="w-5 h-5 object-contain"
                width={16}
                height={16}
              />
              <span className="ml-6 text-gray-600 text-sm">{dict.bedroom}</span>
            </Link>
            <Link
              href={`/${lang}/shop/Outdoor`}
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image
                blurDataURL="/assets/images/blurImage.jpg"
                src="/assets/images/icons/outdoor-cafe.svg"
                alt="outdoor"
                className="w-5 h-5 object-contain"
                width={16}
                height={16}
              />
              <span className="ml-6 text-gray-600 text-sm">{dict.outdoor}</span>
            </Link>
            <Link
              href={`/${lang}/shop/Mattress`}
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image
                blurDataURL="/assets/images/blurImage.jpg"
                src="/assets/images/icons/bed-2.svg"
                alt="Mattress"
                className="w-5 h-5 object-contain"
                width={16}
                height={16}
              />
              <span className="ml-6 text-gray-600 text-sm">
                {dict.mattress}
              </span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
          <div className="flex items-center space-x-6 capitalize">
            <Link
              href={`/${lang}`}
              className="text-gray-200 hover:text-white transition"
            >
              {dict.home}
            </Link>
            <Link
              href={`/${lang}/shop?category=all`}
              className="text-gray-200 hover:text-white transition"
            >
              {dict.shop}
            </Link>
            <Link
              href="#"
              className="text-gray-200 hover:text-white transition"
            >
              {dict.about}
            </Link>
            <Link
              href="#"
              className="text-gray-200 hover:text-white transition"
            >
              {dict.contact}
            </Link>
          </div>
          {session?.user ? (
            <LogoutButton lang={lang} />
          ) : (
            <Link
              href={`/${lang}/login`}
              className="text-gray-200 hover:text-white transition"
            >
              {dict.login}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
