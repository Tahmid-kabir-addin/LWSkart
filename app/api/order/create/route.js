import { OrderPdf } from "@/app/react-print-starter/documents";
import prisma from "@/prisma";
import { compile } from "@fileforge/react-print";
import { Onedoc } from "@onedoc/client";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  const html = await compile(<OrderPdf data={data} />);
  const onedoc = new Onedoc(process.env.ONEDOC_API_KEY);
  // console.log("🚀 ~ POST ~ html:", html)
  let doc = {
    html,
    title: "Order#12345 Invoice",
    test: true, // if true, produce a PDF in test mode with a Onedoc's watermark
    save: true, // if true, host the document and provide a download link in the console and your Onedoc's dashboard
    expiresIn: 2, // the number of day you want to host your document
  };
  const { file, link, error, info } = await onedoc.render(doc);
  if (error) {
    console.error("Error creating PDF: ", error);
    return NextResponse.json({ error: "Error creating PDF" }, { status: 500 });
  }
  console.log("🚀 ~ POST ~ link:", link);
  const {
    userId,
    name,
    company,
    region,
    address,
    city,
    phone,
    email,
    cartItems,
    totalPrice,
    subTotalPrice,
    shippingPrice,
  } = data;

  try {
    // Create the order
    const newOrder = await prisma.Order.create({
      data: {
        userId: new ObjectId(userId).toString(),
        name,
        company,
        region,
        address,
        city,
        phone,
        email,
        subTotalPrice,
        totalPrice,
        shippingPrice,
        pdfLink: link,
        orderedProducts: {
          create: cartItems.map((item) => ({
            productId: new ObjectId(item.id).toString(),
            quantity: item.quantity,
          })),
        },
      },
    });

    return NextResponse.json(newOrder, { status: 200 });
    // return NextResponse.json({ message: "Order created" }, { status: 200 });
  } catch (error) {
    console.error("Error creating order: ", error);
    return NextResponse.json(
      { error: "Error creating order" },
      { status: 500 }
    );
  }
}
