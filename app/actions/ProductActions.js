"use server";
export async function getProductById(productId) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${productId}`
    );
    if (res.ok) return await res.json();
    else throw new Error(await res.text());
  } catch (error) {
    throw new Error(error.message);
  }
}
