"use client";
import { Heart } from "@/public/assets/images/icons/heart";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Wishlist() {
  const { loading, wishlistItems } = useSelector((state) => state.wishlist);

  return (
    <Link
      href="/wishlist"
      className="flex flex-col gap-1 items-center text-center text-gray-700 hover:text-primary transition relative"
    >
      <div className="text-2xl">
        <Heart />
      </div>
      <div className="text-xs leading-3">Wishlist</div>
      {!loading && wishlistItems?.length > 0 && (
        <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          {wishlistItems.length}
        </div>
      )}
    </Link>
  );
}
