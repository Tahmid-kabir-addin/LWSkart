"use server";

import { auth, signIn } from "@/auth";
import prisma from "@/prisma";
import { ObjectId } from "mongodb";

export async function login(prev, formData) {
  try {
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return { success: true };
  } catch (error) {
    return { error: "Invalid Credentials" };
  }
}

export async function register(prev, formData) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          password: formData.get("password"),
          confirm: formData.get("confirm"),
          phone: formData.get("phone"),
        }),
      }
    );
    if (res.ok) {
      return { success: true };
    } else throw new Error(await res.text());
  } catch (error) {
    return { error: error.message };
  }
}

export async function getUser(email) {
  try {
    const user = await prisma.users.findUnique({
      where: {
        email,
      },
      include: {
        ShippingAddress: true,
        BillingAddress: true,
      },
    });
    console.log("🚀 ~ getUser ~ user:", user);
    if (user) return user;
    else throw new Error("User not found");
  } catch (error) {
    throw error;
  }
}

export async function profileUpdate(prev, formData) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/update/${formData.get(
        "userId"
      )}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
        }),
      }
    );
    if (res.ok) {
      return { success: true };
    } else throw new Error(await res.text());
  } catch (error) {
    return { error: error.message };
  }
}

export async function billingUpdate(prev, formData) {
  try {
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/api/billing/update/${formData.get("billingId")}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          country: formData.get("country"),
          street: formData.get("street"),
          city: formData.get("city"),
          zip: formData.get("zip"),
        }),
      }
    );
    if (res.ok) {
      return { success: true };
    } else throw new Error(await res.text());
  } catch (error) {
    return { error: error.message };
  }
}

export async function shippingUpdate(prev, formData) {
  try {
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/api/shipping/update/${formData.get("shippingId")}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          country: formData.get("country"),
          street: formData.get("street"),
          city: formData.get("city"),
          zip: formData.get("zip"),
        }),
      }
    );
    if (res.ok) {
      return { success: true };
    } else throw new Error(await res.text());
  } catch (error) {
    return { error: error.message };
  }
}

export async function getUserById(userId) {
  console.log("🚀 ~ getUserById ~ userId:", userId);
  try {
    // Convert the userId to a MongoDB ObjectId
    const objectId = new ObjectId(userId);

    // Fetch the user from the database using Prisma
    const user = await prisma.users.findUnique({
      where: { id: objectId.toString() },
    });

    return user;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw new Error("Unable to fetch user");
  }
}

export async function getBillingAddressById(billingId) {
  try {
    // Convert the userId to a MongoDB ObjectId
    const objectId = new ObjectId(billingId);

    // Fetch the user from the database using Prisma
    const billingAddress = await prisma.BillingAddress.findUnique({
      where: { id: objectId.toString() },
    });

    return billingAddress;
  } catch (error) {
    console.error("Error fetching billing address by ID:", error);
    throw new Error("Unable to fetch billing address");
  }
}

export async function getShippingAddressById(shippingId) {
  try {
    // Convert the userId to a MongoDB ObjectId
    const objectId = new ObjectId(shippingId);

    // Fetch the user from the database using Prisma
    const ShippingAddress = await prisma.ShippingAddress.findUnique({
      where: { id: objectId.toString() },
    });

    return ShippingAddress;
  } catch (error) {
    console.error("Error fetching billing address by ID:", error);
    throw new Error("Unable to fetch billing address");
  }
}

export async function createShipping() {
  const session = await auth();
  let user = session?.user;
  try {
    user = await getUser(user?.email);

    // find user with email and updated ShippingAddress to the user

    const ShippingAddress = await prisma.ShippingAddress.create({
      data: {
        name: user.name,
        email: user.email,
        phone: "01234567890",
        user: {
          connect: {
            email: user.email,
          },
        },
      },
    });

    // now connect this with the user
    await prisma.users.update({
      where: { email: user.email },
      data: {
        ShippingAddress: {
          connect: {
            id: ShippingAddress.id,
          },
        },
      },
    });
    return ShippingAddress;
  } catch (error) {
    console.error("Error creating shipping address:", error);
    throw new Error("Unable to create shipping address");
  }
}

export async function createBilling() {
  const session = await auth();
  let user = session?.user;
  try {
    user = await getUser(user?.email);

    // find user with email and updated ShippingAddress to the user

    const BillingAddress = await prisma.BillingAddress.create({
      data: {
        name: user.name,
        email: user.email,
        phone: "01234567890",
        user: {
          connect: {
            email: user.email,
          },
        },
      },
    });

    // now connect this with the user
    await prisma.users.update({
      where: { email: user.email },
      data: {
        BillingAddress: {
          connect: {
            id: BillingAddress.id,
          },
        },
      },
    });
    return BillingAddress;
  } catch (error) {
    console.error("Error creating Billing address:", error);
    throw new Error("Unable to create Billing address");
  }
}
