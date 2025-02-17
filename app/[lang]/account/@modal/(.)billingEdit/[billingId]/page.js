import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import {
  createBilling,
  getBillingAddressById,
} from "@/app/actions/UserActions";
import Modal from "@/app/components/Modal";
import BillingUpdateForm from "@/app/components/account/BillingUpdateForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Billing Information",
  description: "E-commerce website for your home appliances",
};

export default async function page({ params }) {
  const dict = await getDictionary(params.lang);
  const session = await auth();
  if (!session) redirect("/login");
  let billing = null;
  if (params.billingId !== "undefined") {
    billing = await getBillingAddressById(params.billingId);
  } else {
    billing = await createBilling();
  }
  return (
    <Modal>
      <div className="contain py-16 ">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-">{dict.biu}</h2>
          <p className="text-gray-600 mb-6 text-sm">{dict.uybi}</p>
          <BillingUpdateForm billing={billing} lang={params.lang} />
        </div>
      </div>
    </Modal>
  );
}
