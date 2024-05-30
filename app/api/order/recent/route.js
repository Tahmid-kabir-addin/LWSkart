import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const recentOrder = await prisma.Order.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(recentOrder);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
