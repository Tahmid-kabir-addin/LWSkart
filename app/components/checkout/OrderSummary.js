"use client";
import { createOrder } from "@/app/actions/OrderAction";
import { dict } from "@/app/dict/dict";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FormError from "../auth/FormError";
import CheckoutForm from "./CheckoutForm";
import OrderConfirmLoader from "./OrderConfirmLoader";
import OrderConfirmModal from "./OrderConfirmModal";

export default function OrderSummary({ lang }) {
  // const [state, formAction] = useFormState(createOrder, null);
  const { loading, cartItems } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [confirmModal, setConfirmModal] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [data, setData] = useState(null);
  const [loadingPage, setLoadingPage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const placeOrder = async () => {
      try {
        const res = await createOrder(data);
        if (res.success) {
          const { order } = res;
          // setLoadingPage(false);
          router.push(`/checkout/success`);
        } else {
          // setLoadingPage(false);
          throw new Error(res.error);
        }
      } catch (error) {
        // setLoadingPage(false);
        throw new Error(error);
      }
    };
    if (orderConfirmed && data) {
      setLoadingPage(true);
      placeOrder();
    }
  }, [orderConfirmed, data, router]);

  useEffect(() => {
    if (!loading) {
      const price = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotalPrice(price > 1000 ? price : price + 50);
    }
  }, [loading, cartItems]);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!agreed) {
      setError(dict(lang, "You must agree to the terms and conditions"));
      return;
    }
    let formData = new FormData(e.currentTarget);
    // also add cartItems, totalPrice, subTotalPrice, shippingPrice to formData
    formData.append("cartItems", JSON.stringify(cartItems));
    formData.append("totalPrice", totalPrice);
    formData.append(
      "subTotalPrice",
      totalPrice > 1000 ? totalPrice : totalPrice - 50
    );
    formData.append("shippingPrice", totalPrice > 1000 ? 0 : 50);
    setData(formData);
    setConfirmModal(true);
  };
  if (loadingPage) return <OrderConfirmLoader />;
  return (
    <form
      className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6"
      onSubmit={handlePlaceOrder}
    >
      <div className="col-span-8 border border-gray-200 p-4 rounded">
        <CheckoutForm lang={lang} />
      </div>

      <div className="col-span-4 border border-gray-200 p-4 rounded">
        {confirmModal && (
          <OrderConfirmModal
            onCloseModal={setConfirmModal}
            onOrderConfirmed={setOrderConfirmed}
          />
        )}
        <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
          {dict(lang, "Order Summary")}
        </h4>
        <div className="space-y-2">
          {!loading &&
            cartItems?.map((item) => (
              <div className="flex justify-between" key={item.id}>
                <div className="w-3/5">
                  <h5 className="text-gray-800 font-medium">{item.name}</h5>
                  <p className="text-sm text-gray-600">
                    {dict(lang, "Size")}: {item.size}
                  </p>
                </div>
                <p className="text-gray-600">x{item.quantity}</p>
                <p className="text-gray-800 font-medium">
                  ${item.quantity * item.price}
                </p>
              </div>
            ))}
        </div>

        <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
          <p>{dict(lang, "Subtotal")}</p>
          <p>
            $
            {totalPrice > 1000
              ? totalPrice.toFixed(2)
              : (totalPrice - 50).toFixed(2)}
          </p>
        </div>

        <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
          <p>{dict(lang, "Shipping Charge")}</p>
          <p>{totalPrice > 1000 ? dict(lang, "Free") : "$50"}</p>
        </div>

        <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
          <p className="font-semibold">{dict(lang, "Total")}</p>
          <p>${totalPrice}</p>
        </div>

        <div className="flex items-center mb-4 mt-2">
          <input
            type="checkbox"
            name="aggrement"
            id="aggrement"
            className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label
            for="aggrement"
            className="text-gray-600 ml-3 cursor-pointer text-sm"
          >
            {dict(lang, "I agree to the")}{" "}
            <Link href="#" className="text-primary">
              {dict(lang, "terms and conditions")}
            </Link>
          </label>
        </div>
        {error && <FormError error={error} />}
        <button
          type="submit"
          className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
        >
          {dict(lang, "Place Order")}
        </button>
      </div>
    </form>
  );
}
