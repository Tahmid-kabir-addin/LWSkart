"use client";
import { register } from "@/app/actions/UserActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormState } from "react-dom";
import FormError from "./FormError";
import SubmitButton from "./SubmitButton";

export default function RegForm() {
  const [state, formAction] = useFormState(register, null);
  const [isChecked, setIsChecked] = useState(false);
  console.log("🚀 ~ RegForm ~ state:", state);
  const router = useRouter();
  if (state?.success) router.push("/login");

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <form action={formAction} method="post" autoComplete="off">
      <div className="space-y-2">
        <div>
          <label htmlFor="name" className="text-gray-600 mb-2 block">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="fulan fulana"
            required
            oninvalid="this.setCustomValidity('Please enter your name')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div></div>
        <div>
          <label htmlFor="email" className="text-gray-600 mb-2 block">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
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
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="01XXXXXXXXX"
            pattern="01[3-9][0-9]{8}"
            required
            oninvalid="this.setCustomValidity('Please enter a valid Bangladeshi phone number (e.g., 01712345678)')"
            oninput="this.setCustomValidity('')"
          />
        </div>

        <div>
          <label htmlFor="password" className="text-gray-600 mb-2 block">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="*******"
            required
            minlength="6"
            maxlength="32"
            oninvalid="this.setCustomValidity('Please enter a password with at least 6 characters and no more than 32 characters')"
            oninput="this.setCustomValidity('')"
          />
        </div>

        <div>
          <label htmlFor="confirm" className="text-gray-600 mb-2 block">
            Confirm password
          </label>
          <input
            type="password"
            name="confirm"
            id="confirm"
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="*******"
          />
        </div>
      </div>
      <div className="mt-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="aggrement"
            className="text-gray-600 ml-3 cursor-pointer"
          >
            I have read and agree to the{" "}
            <Link href="#" className="text-primary">
              terms & conditions
            </Link>
          </label>
        </div>
      </div>
      {state?.error && <FormError error={state.error} />}
      <div className="mt-4">
        <SubmitButton buttonText="Register" isDisabled={!isChecked} />
      </div>
    </form>
  );
}
