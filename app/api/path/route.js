import { NextResponse } from "next/server";

export const POST = async (req) => {
  const data = await req.json();
  console.log("🚀 ~ file: route.js ~ line 5 ~ POST ~ req", data);
  const response = NextResponse.json("hello from post", { status: 200 });

  response.cookies.set("path");

  return response;
};
