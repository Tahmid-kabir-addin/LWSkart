"use client";
import {
  addToCart,
  hideLoading,
  showLoading,
} from "@/app/redux/slices/cartSlice";
import { removeFromwishlist } from "@/app/redux/slices/wishlistSlice";
import { CartIcon } from "@/public/assets/images/icons/Cart";
import TrashIcon from "@/public/assets/images/icons/Trash";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function WishlistItems() {
  const { loading, wishlistItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  if (wishlistItems.length === 0)
    return (
      <div className="text-xl font-medium pt-5">
        No items in wishlist. Explore items{" "}
        <Link href="/shop" className="text-blue-700">
          Here
        </Link>
      </div>
    );

  const handleAddToCart = (item) => {
    dispatch(showLoading());
    dispatch(addToCart({ ...item, quantity: 1 }));
    dispatch(hideLoading());
    toast.success("Item added to cart Successfully!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    handleRemoveItem(item.id);
  };

  const handleRemoveItem = (id) => {
    dispatch(showLoading());
    dispatch(removeFromwishlist({ id }));
    dispatch(hideLoading());
  };
  return (
    <div className="container gap-6 pt-4 pb-16">
      <div className="mx-auto space-y-4 max-w-6xl">
        {!loading &&
          wishlistItems?.map((item) => (
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
              <div className="flex gap-2">
                <button
                  className="flex px-6 py-2 gap-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-bold"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <div className="">
                    <TrashIcon />
                  </div>
                  Remove
                </button>
                <button
                  className={`flex px-6 py-2 gap-2 text-center text-sm text-white ${
                    item.stock < 1
                      ? "bg-red-400 border border-primary cursor-not-allowed"
                      : "bg-primary border border-primary"
                  } rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-bold`}
                  onClick={() => handleAddToCart(item)}
                  disabled={item.stock < 1}
                >
                  <div className="">
                    <CartIcon />
                  </div>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
