import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
  const searchParams = new NextRequest(request).nextUrl.searchParams;
  const { category, minPrice, maxPrice, size } =
    Object.fromEntries(searchParams);
  console.log("🚀 ~ GET ~ size:", size);

  const filters = {};
  if (category) {
    filters.category = {
      in: category.split(","),
    };
  }

  if (minPrice) {
    filters.price = {
      gte: parseFloat(minPrice),
    };
  }

  if (maxPrice) {
    filters.price = {
      ...filters.price,
      lte: parseFloat(maxPrice),
    };
  }

  if (size) {
    filters.size = {
      in: size.split(","),
    };
  }
  console.log("🚀 ~ GET ~ filters:", filters);
  // now update all the products with a new field createdAt

  const products = await prisma.Products.findMany({
    where: filters,
  });

  return NextResponse.json(products, {
    status: 200,
  });
}
