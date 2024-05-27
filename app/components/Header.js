import { auth } from "@/auth";
import { AccountIcon } from "@/public/assets/images/icons/Account";
import { CartIconOutline } from "@/public/assets/images/icons/CartOutline";
import { Heart } from "@/public/assets/images/icons/heart";
import Image from "next/image";
import Link from "next/link";

export default async function Header() {
  const session = await auth();
  console.log("🚀 ~ Header ~ session:", session);
  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            className="w-32"
            width={64}
            height={64}
          />
        </Link>

        <div className="w-full max-w-xl relative flex">
          <span className="absolute left-4 top-3 text-lg text-gray-400">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            name="search"
            id="search"
            className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
            placeholder="search"
          />
          <button className="bg-primary border border-primary text-white px-8 py-3 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex">
            Search
          </button>
        </div>

        <div className="flex items-center space-x-8">
          <Link
            href="/wishlist"
            className="flex flex-col gap-1 items-center text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <Heart />
            </div>
            <div className="text-xs leading-3">Wishlist</div>
            <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              8
            </div>
          </Link>
          <Link
            href="/checkout"
            className="flex flex-col gap-1 items-center text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <CartIconOutline />
            </div>
            <div className="text-xs leading-3">Cart</div>
            <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              2
            </div>
          </Link>

          {session?.user ? (
            <Link
              href="/account"
              className="flex flex-col gap-1 items-center text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt="Account"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <AccountIcon />
                )}
              </div>
              <div className="text-xs leading-3">{session.user.name}</div>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </header>
  );
}
