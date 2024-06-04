import OrderSummary from "@/app/components/checkout/OrderSummary";
import { auth } from "@/auth";
import { House } from "@/public/assets/images/icons/House";
import { ChevronRight } from "@/public/assets/images/icons/ShevronRight";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getDictionary } from "../dictionaries/dictionaries";

export const metadata = {
  title: "Checkout - LWSkart",
  description: "E-commerce website for your home appliances",
};

export default async function page({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <Link href={`/${lang}`} className="text-primary text-base">
          <House />
        </Link>
        <span className="text-sm text-gray-400">
          <ChevronRight />
        </span>
        <p className="text-gray-600 font-medium">{dict.checkout}</p>
      </div>

      <OrderSummary lang={lang} />
    </>
  );
}
