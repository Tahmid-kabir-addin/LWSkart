"use client";
import { CartIconOutline } from "@/public/assets/images/icons/CartOutline";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Cart({ lang }) {
  const { loading, cartItems } = useSelector((state) => state.cart);

  return (
    <Link
      href={`/${lang}/cart`}
      className="flex flex-col gap-1 items-center text-center text-gray-700 hover:text-primary transition relative"
    >
      <div className="text-2xl">
        <CartIconOutline />
      </div>
      <div className="text-xs leading-3">
        {lang === "en" ? "Cart" : "কার্ট"}
      </div>
      {!loading && cartItems?.length > 0 && (
        <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          {cartItems.length}
        </div>
      )}
    </Link>
  );
}
