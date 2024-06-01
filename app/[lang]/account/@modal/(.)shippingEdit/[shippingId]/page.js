import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import { getShippingAddressById } from "@/app/actions/UserActions";
import Modal from "@/app/components/Modal";
import ShippingUpdateForm from "@/app/components/account/ShippingUpdateForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function page({ params }) {
  const dict = await getDictionary(params.lang);
  const session = await auth();
  if (!session) redirect("/login");
  const shipping = await getShippingAddressById(params.shippingId);
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
