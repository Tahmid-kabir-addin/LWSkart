"use client";
import { Heart } from "@/public/assets/images/icons/heart";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  addToWishlist,
  hideLoading,
  showLoading,
} from "../redux/slices/wishlistSlice";

export default function AddToWishlist({ product }) {
  const dispatch = useDispatch();

  const handleAddToWishlist = () => {
    dispatch(showLoading());
    dispatch(addToWishlist({ ...product }));
    dispatch(hideLoading());
    toast.success("Item added to wishlist Successfully!", {
      position: "bottom-center",
      autoClose: 1000,
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
      href="#"
      className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
      title="add to wishlist"
      onClick={handleAddToWishlist}
    >
      <span>
        <Heart />
      </span>
    </button>
  );
}
