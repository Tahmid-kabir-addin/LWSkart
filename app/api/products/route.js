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
  try {
    const products = await prisma.Products.findMany({
      where: filters,
    });
    // if the product's stock is 0 then move it to the end of the list
    products.sort((a, b) => {
      if (a.stock === 0) return 1;
      if (b.stock === 0) return -1;
      return 0;
    });
    return NextResponse.json(products, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.error(error, {
      status: 500,
    });
  }
}
