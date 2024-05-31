"use client";
import {
  addToCart,
  hideLoading,
  showLoading,
} from "@/app/redux/slices/cartSlice";
import { CartIcon } from "@/public/assets/images/icons/Cart";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function AddToCartButton({ product }) {
  const dispatch = useDispatch();
  const { loading, cartItems } = useSelector((state) => state.cart);
  const handleAddToCart = async () => {
    console.log("🚀 ~ AddToCartButton ~ cartItems:", cartItems);

    if (cartItems.find((item) => item.id === product.id)) {
      toast.error("Item already in cart!", {
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
      className={`text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2  ${
        product?.stock < 1
          ? "bg-red-400 border border-primary cursor-not-allowed"
          : "bg-primary border border-primary"
      } rounded-b hover:bg-transparent hover:text-primary transition`}
      onClick={handleAddToCart}
      disabled={product?.stock < 1}
    >
      <span>
        <CartIcon />
      </span>{" "}
      Add to cart
    </button>
  );
}
