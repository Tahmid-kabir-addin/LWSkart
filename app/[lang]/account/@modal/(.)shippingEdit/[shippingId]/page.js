import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import {
  createShipping,
  getShippingAddressById,
} from "@/app/actions/UserActions";
import Modal from "@/app/components/Modal";
import ShippingUpdateForm from "@/app/components/account/ShippingUpdateForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Shipping Information",
  description: "E-commerce website for your home appliances",
};

export default async function page({ params }) {
  const dict = await getDictionary(params.lang);
  const session = await auth();
  if (!session) redirect("/login");
  let shipping = null;
  if (params.shippingId !== "undefined") {
    shipping = await getShippingAddressById(params.shippingId);
  } else {
    shipping = await createShipping();
  }
  return (
    <Modal>
      <div className="contain py-16 ">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-">{dict.sip}</h2>
          <p className="text-gray-600 mb-6 text-sm">{dict.uysi}</p>
          <ShippingUpdateForm shipping={shipping} lang={params.lang} />
        </div>
      </div>
    </Modal>
  );
}
