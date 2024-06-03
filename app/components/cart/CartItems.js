"use client";

import { reduceStock } from "@/app/actions/ProductActions";
import {
  hideLoading,
  removeFromCart,
  showLoading,
} from "@/app/redux/slices/cartSlice";
import TrashIcon from "@/public/assets/images/icons/Trash";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartQuantittyButtons from "./CartQuantittyButtons";

export default function CartItems({ lang }) {
  const { loading, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (!loading) {
      const price = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotalPrice(price);
    }
  }, [loading, cartItems]);
  if (cartItems.length === 0)
    return (
      <div className="text-xl font-medium pt-5">
        {lang === "en"
          ? "No items in cart. Explore items"
          : "কার্টে কোনো পণ্য নেই। পণ্য খুঁজুন"}{" "}
        <Link href={`/${lang}/shop`} className="text-blue-700">
          {lang === "en" ? "Here" : "এখানে"}
        </Link>
      </div>
    );

  const handleRemoveItem = async (id) => {
    const item = cartItems.find((item) => item.id === id);
    dispatch(showLoading());
    try {
      await reduceStock(id, -1 * item.quantity);
      dispatch(removeFromCart({ id }));
    } catch (error) {
      throw error;
    }
    dispatch(hideLoading());
  };

  return (
    <div className="container gap-6 pt-4 pb-16">
      <div className="mx-auto space-y-4 max-w-6xl">
        {cartItems?.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded"
          >
            <div className="w-28">
              <Image
                placeholder="blur"
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="w-full"
                unoptimized
                blurDataURL="/assets/images/blurImage.jpg"
              />
            </div>
            <div className="w-1/3">
              <h2 className="text-gray-800 text-xl font-medium uppercase">
                {item.name}
              </h2>
              <p className="text-gray-500 text-sm">
                {lang === "en" ? "Availability" : "উপযোগিতা"}:{" "}
                <span
                  className={item.stock > 0 ? "text-green-600" : "text-red-600"}
                >
                  {item.stock > 0
                    ? lang === "en"
                      ? "In Stock"
                      : "সটকে আছে"
                    : lang === "en"
                    ? "Out of Stock"
                    : "স্টকে নেই"}
                </span>
              </p>
            </div>
            <div className="text-primary text-lg font-semibold">
              ${item.price}
            </div>
            <CartQuantittyButtons item={item} />
            <button
              className={`flex px-6 py-2 gap-2 text-center text-sm text-white ${
                loading
                  ? "bg-red-400 border border-primary cursor-not-allowed"
                  : "bg-primary border border-primary"
              } rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-bold`}
              onClick={() => handleRemoveItem(item.id)}
            >
              <div className="">
                <TrashIcon />
              </div>
              {!loading
                ? lang === "en"
                  ? "Remove"
                  : "মুছে ফেলুন"
                : lang === "en"
                ? "Removing..."
                : "মুছে ফেলা হচ্ছে..."}
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 flex items-center gap-3 flex-col">
        <div className="text-xl font-semibold">
          {lang === "en" ? "Total Price" : "মোট মূল্য"}: $
          {totalPrice.toFixed(2)}
        </div>
        <Link
          href={`/${lang}/checkout`}
          className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-bold"
        >
          {lang === "en" ? "Proceed to Checkout" : "চেকআউট করুন"}
        </Link>
      </div>
    </div>
  );
}
