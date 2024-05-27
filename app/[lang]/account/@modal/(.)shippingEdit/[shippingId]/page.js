import { getShippingAddressById } from "@/app/actions/UserActions";
import Modal from "@/app/components/Modal";
import ShippingUpdateForm from "@/app/components/account/ShippingUpdateForm";

export default async function page({ params }) {
  const shipping = await getShippingAddressById(params.shippingId);
  return (
    <Modal>
      <div className="contain py-16 ">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-">
            Shipping Information Update
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Update your shipping information
          </p>
          <ShippingUpdateForm shipping={shipping} />
        </div>
      </div>
    </Modal>
  );
}
