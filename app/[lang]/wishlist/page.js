import WishlistItems from "@/app/components/wishlist/WishlistItems";
import { dict } from "@/app/dict/dict";
import { auth } from "@/auth";
import { House } from "@/public/assets/images/icons/House";
import { ChevronRight } from "@/public/assets/images/icons/ShevronRight";
import { redirect } from "next/navigation";

export default async function page({ params: { lang } }) {
  const session = await auth();
  if (!session) redirect("/login");
  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <House />
        </a>
        <span className="text-sm text-gray-400">
          <ChevronRight />
        </span>
        <p className="text-gray-600 font-medium">{dict(lang, "Wishlist")}</p>
      </div>
      <div className="flex flex-col w-screen justify-center items-center">
        <h1 className="text-3xl ">{dict(lang, "Wishlist")}</h1>
        <WishlistItems lang={lang} />
      </div>
    </>
  );
}
