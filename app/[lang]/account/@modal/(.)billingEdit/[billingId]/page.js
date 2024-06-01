import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import { getBillingAddressById } from "@/app/actions/UserActions";
import Modal from "@/app/components/Modal";
import BillingUpdateForm from "@/app/components/account/BillingUpdateForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function page({ params }) {
  const dict = await getDictionary(params.lang);
  const session = await auth();
  if (!session) redirect("/login");
  const billing = await getBillingAddressById(params.billingId);
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
