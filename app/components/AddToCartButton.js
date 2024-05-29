"use client";
import { addToCart, hideLoading } from "@/app/redux/slices/cartSlice";
import { useDispatch } from "react-redux";

export default function AddToCartButton({ product }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product }));
    dispatch(hideLoading());
  };

  return (
    <button
      className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
      onClick={handleAddToCart}
    >
      Add to cart
    </button>
  );
}
