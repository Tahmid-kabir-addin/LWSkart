import BillingAddress from "@/app/components/account/BillingAddress";
import PersonalProfile from "@/app/components/account/PersonalProfile";
import ShippingAddress from "@/app/components/account/ShippingAddress";
import { House } from "@/public/assets/images/icons/House";
import { ChevronRight } from "@/public/assets/images/icons/ShevronRight";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <Link href="/" className="text-primary text-base">
          <House />
        </Link>
        <span className="text-sm text-gray-400">
          <ChevronRight />
        </span>
        <p className="text-gray-600 font-medium">Account</p>
      </div>
      <div className="container  items-start gap-6 pt-4 pb-16">
        <div className=" grid grid-cols-3 gap-4 mx-auto max-w-5xl">
          <PersonalProfile />

          <ShippingAddress />

          <BillingAddress />
        </div>
      </div>
    </>
  );
}
