"use server";

import { signIn } from "@/auth";
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
    const res = await fetch("http://localhost:3000/api/auth/register", {
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
    });
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
    });
    if (user) return user;
    else throw new Error("User not found");
  } catch (error) {
    throw error;
  }
}

export async function profileUpdate(prev, formData) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/user/update/${formData.get("userId")}`,
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
