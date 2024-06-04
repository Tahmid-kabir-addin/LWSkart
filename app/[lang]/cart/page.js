import CartItems from "@/app/components/cart/CartItems";
import { auth } from "@/auth";
import { House } from "@/public/assets/images/icons/House";
import { ChevronRight } from "@/public/assets/images/icons/ShevronRight";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getDictionary } from "../dictionaries/dictionaries";

export const metadata = {
  title: "Cart - LWSkart",
  description: "E-commerce website for your home appliances",
};

export default async function page({ params: { lang } }) {
  const dict = await getDictionary(lang);
  console.log(dict.ci);
  const session = await auth();
  if (!session) redirect("/login");
  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <Link href={`/${lang}`} className="text-primary text-base">
          <House />
        </Link>
        <span className="text-sm text-gray-400">
          <ChevronRight />
        </span>
        <p className="text-gray-600 font-medium">Cart</p>
      </div>
      <div className="flex flex-col w-screen justify-center items-center">
        <h1 className="text-3xl">{dict.ci}</h1>
        <CartItems lang={lang} />
      </div>
    </>
  );
}
