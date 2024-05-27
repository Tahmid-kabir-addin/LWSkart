import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const { billingId } = params;
  const { name, email, phone, country, street, city, zip } =
    await request.json();
  try {
    const objectId = new ObjectId(billingId);

    const user = await prisma.BillingAddress.update({
      where: { id: objectId.toString() },
      data: {
        name,
        email,
        phone,
        country,
        street,
        city,
        zip,
      },
    });
    return NextResponse.json("Updated Successfully!", { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
