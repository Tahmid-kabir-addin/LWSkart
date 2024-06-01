import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import Image from "next/image";

export default async function Features({ lang }) {
  const dict = await getDictionary(lang);
  return (
    <div className="container py-16">
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image
            blurDataURL="/assets/images/blurImage.jpg"
            src="/assets/images/icons/delivery-van.svg"
            alt="Delivery"
            className="w-12 h-12 object-contain"
            width={32}
            height={32}
          />
          <div>
            <h4 className="font-medium capitalize text-lg">
              {dict.freeShipping}
            </h4>
            <p className="text-gray-500 text-sm">{dict.orderOver1000}</p>
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image
            blurDataURL="/assets/images/blurImage.jpg"
            src="/assets/images/icons/money-back.svg"
            alt="Delivery"
            className="w-12 h-12 object-contain"
            width={32}
            height={32}
          />
          <div>
            <h4 className="font-medium capitalize text-lg">
              {dict.moneyReturns}
            </h4>
            <p className="text-gray-500 text-sm">{dict.daysMoneyReturn}</p>
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image
            blurDataURL="/assets/images/blurImage.jpg"
            src="/assets/images/icons/service-hours.svg"
            alt="Delivery"
            className="w-12 h-12 object-contain"
            width={32}
            height={32}
          />
          <div>
            <h4 className="font-medium capitalize text-lg">
              {dict.support247}
            </h4>
            <p className="text-gray-500 text-sm">{dict.customerSupport}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
