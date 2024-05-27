import prisma from "@/prisma";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function getUserById(userId) {
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

export async function GET(request, { params }) {
  const { userId } = params;
  console.log("🚀 ~ GET ~ userId:", userId);
  try {
    const user = await getUserById(userId);
    console.log("🚀 ~ GET ~ user:", user);
    if (!user) throw new Error("User not found");

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
