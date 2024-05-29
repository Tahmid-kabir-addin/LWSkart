import {
  addToCart,
  hideLoading,
  showLoading,
} from "@/app/redux/slices/cartSlice";
import { useDispatch } from "react-redux";

export default function CartQuantittyButtons({ item }) {
  const dispatch = useDispatch();
  const handleQuantityChange = (quantity) => {
    if (item.quantity === 1 && quantity === -1) return;
    if (item.quantity === item.stock && quantity === 1) return;
    dispatch(showLoading());
    dispatch(
      addToCart({
        ...item,
        quantity: item.quantity + quantity,
      })
    );
    dispatch(hideLoading());
  };
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleQuantityChange(-1)}
        className="px-2 py-1 text-gray-600 border border-gray-300 rounded hover:bg-gray-200"
        disabled={item.quantity === 1}
      >
        -
      </button>
      <span>{item.quantity}</span>
      <button
        onClick={() => handleQuantityChange(1)}
        className="px-2 py-1 text-gray-600 border border-gray-300 rounded hover:bg-gray-200"
        disabled={item.quantity === item.stock}
      >
        +
      </button>
    </div>
  );
}
