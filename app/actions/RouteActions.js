"use server";

import { cookies } from "next/headers";

export async function setCookies(path) {
  // Set a new cookie
  cookies().set({
    name: "redirectTo",
    value: path,
    path: "/", // Set the path where the cookie is accessible
    httpOnly: true, // If you want to restrict access to HTTP requests only
  });

  // You can return some response or handle as needed
  return { success: true };
}
