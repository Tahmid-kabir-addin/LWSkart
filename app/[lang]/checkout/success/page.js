import { getRecentOrder } from "@/app/actions/OrderAction";
import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
export default async function OrderSuccess() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const { order } = await getRecentOrder();
  if (!order) throw new Error("No recent order found");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-[#e1f4e5] p-8 rounded-lg shadow-md text-center">
        <Image
          src="/assets/images/success.gif" // replace with the actual path to your success image
          alt="Success"
          width={150}
          height={150}
          className="mx-auto"
          unoptimized
        />
        <h1 className="text-3xl font-bold mt-4">Order Success!</h1>
        <p className="text-gray-600 mt-2">
          Thank you for your purchase! Your order has been successfully placed.
        </p>
        <p className="text-gray-600 mt-2">
          You can download your invoice by clicking the button below.
        </p>
        <a
          href={order.pdfLink}
          className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition"
          download
          rel="noopener noreferrer"
        >
          Download Invoice
        </a>
      </div>
    </div>
  );
}
