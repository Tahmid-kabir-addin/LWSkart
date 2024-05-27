import prisma from "@/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const { name, email, password, confirm, phone } = await req.json();
  
  if (phone.length !== 11) {
    return new NextResponse("Phone number must be 11 digits", {
      status: 400,
    });
  }

  if (password !== confirm) {
    return new NextResponse("Password does not match", {
      status: 400,
    });
  }
  const hashedPassword = await bcrypt.hash(password, 5);
  console.log("🚀 ~ POST ~ hashedPassword:", hashedPassword);

  const user = {
    name,
    email,
    password: hashedPassword,
    phone,
  };
  console.log("🚀 ~ POST ~ user:", user);

  const existingUser = await prisma.users.findUnique({
    where: {
      email,
    },
  });
  if (existingUser) {
    return new NextResponse("User already exists", {
      status: 400,
    });
  }
  try {
    await prisma.users.create({
      data: user,
    });
    return new NextResponse("User has been created Successfully!", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
