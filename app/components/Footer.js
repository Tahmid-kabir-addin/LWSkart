import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TwitterIcon,
} from "react-share";
import { getDictionary } from "../[lang]/dictionaries/dictionaries";

export default async function Footer({ lang }) {
  const dict = await getDictionary(lang);
  return (
    <>
      <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
        <div className="container grid grid-cols-3">
          <div className="col-span-1 space-y-8 mr-2">
            <Image
              blurDataURL="/assets/images/blurImage.jpg"
              src="/assets/images/logo.svg"
              alt="logo"
              className="w-30"
              width={400}
              height={400}
              unoptimized
            />
            <div className="mr-2">
              <p className="text-gray-500">{dict.description}</p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <FacebookIcon size={32} className="rounded-full" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <LinkedinIcon size={32} className="rounded-full" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <TwitterIcon size={32} className="rounded-full" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <RedditIcon size={32} className="rounded-full" />
              </Link>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  {dict.solutions}
                </h3>
                <div className="mt-4 space-y-4">
                  <Link
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {dict.marketing}
                  </Link>
                  <Link
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {dict.analitycs}
                  </Link>
                  <Link
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {dict.commerce}
                  </Link>
                  <Link
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {dict.insights}
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  {dict.support}
                </h3>
                <div className="mt-4 space-y-4">
                  <Link
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {dict.pricing}
                  </Link>
                  <Link
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {dict.documentation}
                  </Link>
                  <Link
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {dict.guides}
                  </Link>
                  <Link
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {dict.apiStatus}
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  {dict.solutions}
                </h3>
                <div className="mt-4 space-y-4">
                  <Link
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {dict.marketing}
                  </Link>
                  <Link
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {dict.analitycs}
                  </Link>
                  <Link
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {dict.commerce}
                  </Link>
                  <Link
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {dict.insights}
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  {dict.support}
                </h3>
                <div className="mt-4 space-y-4">
                  <Link
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {dict.pricing}
                  </Link>
                  <Link
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {dict.documentation}
                  </Link>
                  <Link
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {dict.guides}
                  </Link>
                  <Link
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {dict.apiStatus}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-gray-800 py-4">
        <div className="container flex items-center justify-between">
          <p className="text-white">&copy; {dict.rights}</p>
          <div>
            <Image
              placeholder="blur"
              blurDataURL="/assets/images/blurImage.jpg"
              src="/assets/images/methods.png"
              alt="methods"
              className="h-5"
              width={250}
              height={300}
              unoptimized
            />
          </div>
        </div>
      </div>
    </>
  );
}
