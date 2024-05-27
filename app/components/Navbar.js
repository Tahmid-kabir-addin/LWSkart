import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default async function Navbar() {
  // const path = usePathname();
  let isLoginPage = false;
  // if (path.includes("login") || path.includes("register")) isLoginPage = true;
  const session = await auth();

  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
          <span className="text-white">
            <Image
              src="/assets/images/icons/bars.svg"
              width={24}
              height={24}
              alt="bars"
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
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image
                src="/assets/images/icons/sofa.svg"
                alt="sofa"
                className="w-5 h-5 object-contain"
                width={16}
                height={16}
              />
              <span className="ml-6 text-gray-600 text-sm">Sofa</span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image
                src="/assets/images/icons/terrace.svg"
                alt="terrace"
                className="w-5 h-5 object-contain"
                width={16}
                height={16}
              />
              <span className="ml-6 text-gray-600 text-sm">Living Room</span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image
                src="/assets/images/icons/bed.svg"
                alt="bed"
                className="w-5 h-5 object-contain"
                width={16}
                height={16}
              />
              <span className="ml-6 text-gray-600 text-sm">Bedroom</span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image
                src="/assets/images/icons/office.svg"
                alt="Outdoor"
                className="w-5 h-5 object-contain"
                width={16}
                height={16}
              />
              <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image
                src="/assets/images/icons/outdoor-cafe.svg"
                alt="outdoor"
                className="w-5 h-5 object-contain"
                width={16}
                height={16}
              />
              <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image
                src="/assets/images/icons/bed-2.svg"
                alt="Mattress"
                className="w-5 h-5 object-contain"
                width={16}
                height={16}
              />
              <span className="ml-6 text-gray-600 text-sm">Mattress</span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
          <div className="flex items-center space-x-6 capitalize">
            <Link
              href="/"
              className="text-gray-200 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-200 hover:text-white transition"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="text-gray-200 hover:text-white transition"
            >
              About us
            </Link>
            <Link
              href="#"
              className="text-gray-200 hover:text-white transition"
            >
              Contact us
            </Link>
          </div>
          {session?.user ? (
            <LogoutButton />
          ) : (
            <Link
              href="/login"
              className="text-gray-200 hover:text-white transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}