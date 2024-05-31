import prisma from "@/prisma";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { productId } = params;
  console.log("🚀 ~ GET ~ productId:", productId);

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

export async function PATCH(request, { params }) {
  const { productId } = params;
  const { quantity } = await request.json();
  console.log("🚀 ~ PATCH ~ productId:", productId);
  console.log("🚀 ~ PATCH ~ quantity:", quantity);

  try {
    const objectId = new ObjectId(productId);

    const product = await prisma.Products.findUnique({
      where: { id: objectId.toString() },
    });

    if (product.stock < quantity) {
      return NextResponse.json(
        {
          error: "Stock is not enough",
          stock: product.stock,
        },
        { status: 400 }
      );
    }

    const updatedProduct = await prisma.Products.update({
      where: { id: objectId.toString() },
      data: { stock: product.stock - quantity },
    });

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
