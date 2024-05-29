"use client";

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

export default function CartItems() {
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
        No items in cart. Explore items{" "}
        <Link href="/shop" className="text-blue-700">
          Here
        </Link>
      </div>
    );

  const handleRemoveItem = (id) => {
    dispatch(showLoading());
    dispatch(removeFromCart({ id }));
    dispatch(hideLoading());
  };
  return (
    <div className="container gap-6 pt-4 pb-16">
      <div className="mx-auto space-y-4 max-w-6xl">
        {!loading &&
          cartItems?.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded"
            >
              <div className="w-28">
                <Image
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
                  Availability:{" "}
                  <span
                    className={
                      item.stock > 0 ? "text-green-600" : "text-red-600"
                    }
                  >
                    {item.stock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </p>
              </div>
              <div className="text-primary text-lg font-semibold">
                ${item.price}
              </div>
              <CartQuantittyButtons item={item} />
              <button
                className="flex px-6 py-2 gap-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-bold"
                onClick={() => handleRemoveItem(item.id)}
              >
                <div className="">
                  <TrashIcon />
                </div>
                Remove
              </button>
            </div>
          ))}
      </div>
      <div className="mt-8 flex items-center gap-3 flex-col">
        <div className="text-xl font-semibold">
          Total Price: ${totalPrice.toFixed(2)}
        </div>
        <Link
          href="/checkout"
          className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-bold"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
