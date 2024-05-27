import { getBillingAddressById } from "@/app/actions/UserActions";
import BillingUpdateForm from "@/app/components/account/BillingUpdateForm";

export default async function page({ params }) {
  const billing = await getBillingAddressById(params.billingId);
  return (
    <div className="contain py-16 ">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-">
          Billing Information Update
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Update your billing information
        </p>
        <BillingUpdateForm billing={billing} />
      </div>
    </div>
  );
}
