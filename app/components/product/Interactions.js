"use client";
import { reduceStock } from "@/app/actions/ProductActions";
import {
  addToCart,
  hideLoading,
  showLoading,
} from "@/app/redux/slices/cartSlice";
import { addToWishlist } from "@/app/redux/slices/wishlistSlice";
import { CartIcon } from "@/public/assets/images/icons/Cart";
import { Heart } from "@/public/assets/images/icons/heart";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import QuantityButtons from "./QuantityButtons";

export default function Interactions({ product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { loading, cartItems } = useSelector((state) => state.cart);
  const router = useRouter();

  const handleAddToCart = async () => {
    const cartItemQuantity =
      cartItems.find((item) => item.id === product.id)?.quantity || 0;
    if (
      cartItems.find((item) => item.id === product.id) &&
      quantity <= cartItemQuantity
    ) {
      toast.error("Same quantity of this item already in cart!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    dispatch(showLoading());
    try {
      await reduceStock(product.id, quantity - cartItemQuantity);
      dispatch(addToCart({ ...product, quantity }));
    } catch (error) {
      throw error;
    }
    dispatch(hideLoading());
    router.refresh();
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
  const handleIncrement = () =>
    setQuantity((prev) => (prev < product?.stock ? prev + 1 : prev));
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  return (
    <>
      <QuantityButtons
        stock={product?.stock}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        quantity={quantity}
      />

      <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
        <button
          className={`text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2  ${
            product?.stock < 1 || loading
              ? "bg-red-400 border border-primary cursor-not-allowed"
              : "bg-primary border border-primary"
          } rounded-b hover:bg-transparent hover:text-primary transition`}
          onClick={handleAddToCart}
          disabled={product?.stock < 1}
        >
          <span>
            <CartIcon />
          </span>{" "}
          {!loading ? "Add to cart" : "Adding to cart..."}
        </button>
        <button
          className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
          onClick={handleAddToWishlist}
        >
          <span>
            <Heart />
          </span>{" "}
          Wishlist
        </button>
      </div>
    </>
  );
}
