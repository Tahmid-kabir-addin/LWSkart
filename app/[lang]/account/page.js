import {
  createBilling,
  createShipping,
  getUser,
} from "@/app/actions/UserActions";
import BillingAddress from "@/app/components/account/BillingAddress";
import PersonalProfile from "@/app/components/account/PersonalProfile";
import ShippingAddress from "@/app/components/account/ShippingAddress";
import { auth } from "@/auth";
import { House } from "@/public/assets/images/icons/House";
import { ChevronRight } from "@/public/assets/images/icons/ShevronRight";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getDictionary } from "../dictionaries/dictionaries";

export default async function page({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const session = await auth();
  if (!session) redirect("/login");
  let user = await getUser(session?.user?.email);
  console.log("🚀 ~ page ~ user:", user);
  if (!user.BillingAddress) await createBilling();
  if (!user.ShippingAddress) await createShipping();
  user = await getUser(user?.email);
  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <Link href={`/${lang}`} className="text-primary text-base">
          <House />
        </Link>
        <span className="text-sm text-gray-400">
          <ChevronRight />
        </span>
        <p className="text-gray-600 font-medium">{dict.account}</p>
      </div>
      <div className="container  items-start gap-6 pt-4 pb-16">
        <div className=" grid grid-cols-3 gap-4 mx-auto max-w-5xl">
          <PersonalProfile user={user} lang={lang} />

          <ShippingAddress
            ShippingAddress={user?.ShippingAddress}
            lang={lang}
          />

          <BillingAddress BillingAddress={user?.BillingAddress} lang={lang} />
        </div>
      </div>
    </>
  );
}
