import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const { userId } = params;
  const { name, email, phone } = await request.json();
  try {
    const objectId = new ObjectId(userId);

    const user = await prisma.users.update({
      where: { id: objectId.toString() },
      data: {
        name,
        email,
        phone,
      },
    });
    return NextResponse.json("Updated Successfully!", { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
