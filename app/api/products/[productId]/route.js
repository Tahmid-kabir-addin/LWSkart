import prisma from "@/prisma";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { productId } = params;
  console.log("🚀 ~ GET ~ productId:", productId)

  try {
    const objectId = new ObjectId(productId);

    const product = await prisma.Products.findUnique({
      where: { id: objectId.toString() },
    });
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
