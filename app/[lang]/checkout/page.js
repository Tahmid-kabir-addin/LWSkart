import CheckoutForm from "@/app/components/checkout/CheckoutForm";
import OrderSummary from "@/app/components/checkout/OrderSummary";
import { House } from "@/public/assets/images/icons/House";
import { ChevronRight } from "@/public/assets/images/icons/ShevronRight";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <Link href="../index.html" className="text-primary text-base">
          <House />
        </Link>
        <span className="text-sm text-gray-400">
          <ChevronRight />
        </span>
        <p className="text-gray-600 font-medium">Checkout</p>
      </div>

      <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
        <CheckoutForm />

        <OrderSummary />
      </div>
    </>
  );
}
