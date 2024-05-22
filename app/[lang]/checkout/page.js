import CheckoutForm from "@/app/components/checkout/CheckoutForm";
import OrderSummary from "@/app/components/checkout/OrderSummary";
import { House } from "@/public/assets/images/icons/House";
import { ChevronRight } from "@/public/assets/images/icons/ShevronRight";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div class="container py-4 flex items-center gap-3">
        <Link href="../index.html" class="text-primary text-base">
          <House />
        </Link>
        <span class="text-sm text-gray-400">
          <ChevronRight />
        </span>
        <p class="text-gray-600 font-medium">Checkout</p>
      </div>

      <div class="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
        <CheckoutForm />

        <OrderSummary />
      </div>
    </>
  );
}
