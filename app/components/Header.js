import { auth } from "@/auth";
import { AccountIcon } from "@/public/assets/images/icons/Account";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";
import Searchbar from "./Searchbar";
import Wishlist from "./Wishlist";

export default async function Header() {
  const session = await auth();
  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            placeholder="blur"
            blurDataURL="/assets/images/blurImage.jpg"
            src="/assets/images/logo.svg"
            alt="Logo"
            className="w-32"
            width={64}
            height={64}
          />
        </Link>

        <Searchbar />

        <div className="flex items-center space-x-8">
          <Wishlist />
          <Cart />
          {session?.user ? (
            <Link
              href="/account"
              className="flex flex-col gap-1 items-center text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                {session.user.image ? (
                  <Image
                    placeholder="blur"
                    blurDataURL="/assets/images/blurImage.jpg"
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
