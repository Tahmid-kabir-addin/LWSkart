"use client";
import {
  addToCart,
  hideLoading,
  showLoading,
} from "@/app/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function AddToCartButton({ product }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(showLoading());
    dispatch(addToCart({ ...product, quantity: 1 }));
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
  };

  return (
    <button
      className={`block w-full py-1 text-center text-white ${
        product?.stock < 1
          ? "bg-red-400 border border-primary"
          : "bg-primary border border-primary"
      } rounded-b hover:bg-transparent hover:text-primary transition`}
      onClick={handleAddToCart}
      disabled={product?.stock < 1}
    >
      Add to cart
    </button>
  );
}
