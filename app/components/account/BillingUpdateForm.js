"use client";
import { billingUpdate } from "@/app/actions/UserActions";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import FormError from "../auth/FormError";
import SubmitButton from "../auth/SubmitButton";

export default function BillingUpdateForm({ billing }) {
  const [state, formAction] = useFormState(billingUpdate, null);
  const router = useRouter();
  if (state?.success) {
    toast.success("Billing Information Updated Successfully!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
  }
  return (
    <form action={formAction} method="post" autoComplete="off">
      <input hidden type="text" name="billingId" value={billing?.id} />
      <div className="space-y-2">
        <div>
          <label htmlFor="name" className="text-gray-600 mb-2 block">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={billing?.name}
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-gray-600 mb-2 block">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={billing?.email}
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="youremail.@domain.com"
            required
            oninvalid="this.setCustomValidity('Please enter a valid email address (e.g., x@gmail.com)')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-gray-600 mb-2 block">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            defaultValue={billing?.phone}
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="01XXXXXXXXX"
            pattern="01[3-9][0-9]{8}"
            required
            oninvalid="this.setCustomValidity('Please enter a valid Bangladeshi phone number (e.g., 01712345678)')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div>
          <label htmlFor="country" className="text-gray-600 mb-2 block">
            Country
          </label>
          <input
            type="text"
            name="country"
            id="country"
            defaultValue={billing?.country}
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="Bangladesh"
          />
        </div>
        <div>
          <label htmlFor="street" className="text-gray-600 mb-2 block">
            Street
          </label>
          <input
            type="text"
            name="street"
            id="street"
            defaultValue={billing?.street}
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="1"
          />
        </div>
        <div>
          <label htmlFor="city" className="text-gray-600 mb-2 block">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            defaultValue={billing?.city}
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="zip" className="text-gray-600 mb-2 block">
            Zip Code
          </label>
          <input
            type="text"
            name="zip"
            id="zip"
            defaultValue={billing?.zip}
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="1205"
          />
        </div>
      </div>
      {state?.error && <FormError error={state.error} />}
      <div className="mt-4">
        <SubmitButton buttonText="Update" />
      </div>
    </form>
  );
}
