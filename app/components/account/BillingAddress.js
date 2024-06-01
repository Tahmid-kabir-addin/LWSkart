import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import Link from "next/link";

export default async function BillingAddress({ BillingAddress, lang }) {
  const dict = await getDictionary(lang);
  return (
    <div className="shadow rounded bg-white px-4 pt-6 pb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-800 text-lg">
          {dict.billingAddress}
        </h3>
        <Link
          href={`/account/billingEdit/${BillingAddress?.id}`}
          className="text-primary"
        >
          {dict.edit}
        </Link>
      </div>
      <div className="space-y-1">
        <h4 className="text-gray-700 font-medium text-xl">
          {BillingAddress?.name}
        </h4>
        <p className="text-gray-800">{BillingAddress?.email}</p>
        <p className="text-gray-800">
          {BillingAddress?.city}, {BillingAddress?.country}
        </p>
        <p className="text-gray-800">{BillingAddress?.zip}</p>
        <p className="text-gray-800">{BillingAddress?.phone}</p>
      </div>
    </div>
  );
}
