"use client";
import { profileUpdate } from "@/app/actions/UserActions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import FormError from "../auth/FormError";
import SubmitButton from "../auth/SubmitButton";

export default function ProfileUpdateForm({ user }) {
  const [state, formAction] = useFormState(profileUpdate, null);
  console.log("🚀 ~ ProfileUpdateForm ~ state:", state);
  const router = useRouter();
  const [message, setMessage] = useState("");
  if (state?.success) {
    toast.success("Updated Successfully!", {
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
      <input hidden type="text" name="userId" value={user?.id} />
      <div className="space-y-2">
        <div>
          <label htmlFor="name" className="text-gray-600 mb-2 block">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={user?.name}
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
            defaultValue={user?.email}
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
            defaultValue={user?.phone}
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="01XXXXXXXXX"
            pattern="01[3-9][0-9]{8}"
            required
            oninvalid="this.setCustomValidity('Please enter a valid Bangladeshi phone number (e.g., 01712345678)')"
            oninput="this.setCustomValidity('')"
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
