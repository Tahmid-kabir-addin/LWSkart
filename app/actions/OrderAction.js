"use server";

import { auth } from "@/auth";
import { getUser } from "./UserActions";

export async function createOrder(formData) {
  let data = Object.fromEntries(formData.entries());
  data.cartItems = JSON.parse(data.cartItems);
  data.totalPrice = parseFloat(data.totalPrice);
  data.subTotalPrice = parseFloat(data.subTotalPrice);
  data.shippingPrice = data.subTotalPrice > 1000 ? 0 : 50;
  console.log("🚀 ~ createOrder ~ data:", data);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/order/create`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (res.ok) {
      console.log("🚀 ~ createOrder ~ res:", res);
      const order = await res.json();
      console.log("🚀 ~ createOrder ~ order:", order);
      return { success: true, order };
    } else throw new Error(await res.text());
  } catch (error) {
    return { error: error.message };
  }
}

export async function getUserInfo() {
  const session = await auth();
  try {
    const user = await getUser(session?.user?.email);
    return { success: true, user };
  } catch (error) {
    return { error: error.message };
  }
}

export async function getRecentOrder() {
  const session = await auth();
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/order/recent`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    if (res.ok) {
      const order = await res.json();
      return { success: true, order };
    } else throw new Error(await res.text());
  } catch (error) {
    return { error: error.message };
  }
}
