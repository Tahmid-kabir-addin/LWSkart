"use server";
export async function getProductById(productId) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${productId}`,
      {
        cache: "no-store",
      }
    );
    if (res.ok) return await res.json();
    else throw new Error(await res.text());
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getProductByCategoryName(categoryName) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products?category=${categoryName}`
    );
    if (res.ok) return await res.json();
    else throw new Error(await res.text());
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getAllProducts() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`
    );
    if (res.ok) return await res.json();
    else throw new Error(await res.text());
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function reduceStock(productId, quantity) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${productId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity }),
      }
    );
    if (res.ok) return await res.json();
    else throw new Error(await res.text());
  } catch (error) {
    throw new Error(error.message);
  }
}
