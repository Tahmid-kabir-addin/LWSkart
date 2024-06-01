"use client";
import { getUserInfo } from "@/app/actions/OrderAction";
import { dict } from "@/app/dict/dict";
import { useEffect, useState } from "react";

export default function CheckoutForm({ lang }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const init = async () => {
      const res = await getUserInfo();
      if (res.success) {
        setUser(res.user);
        setLoading(false);
      } else throw new Error(res.error);
    };
    init();
  }, []);
  return (
    <>
      <input hidden type="text" name="userId" value={user?.id} />
      <h3 className="text-lg font-medium capitalize mb-4">
        {dict(lang, "Checkout")}
      </h3>
      <div className="space-y-4">
        <div>
          <label for="first-name" className="text-gray-600">
            {dict(lang, "Name")} <span className="text-primary">*</span>
          </label>
          <input
            defaultValue={user?.name}
            type="text"
            name="name"
            id="name"
            className="input-box"
            required
            oninvalid="this.setCustomValidity('Please enter your name')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div>
          <label for="company" className="text-gray-600">
            {dict(lang, "Company")}
          </label>
          <input
            type="text"
            name="company"
            id="company"
            className="input-box"
          />
        </div>
        <div>
          <label for="region" className="text-gray-600">
            {dict(lang, "Country ")}
            <span className="text-primary">*</span>
          </label>
          <input
            defaultValue={user?.ShippingAddress?.country}
            type="text"
            name="region"
            id="region"
            className="input-box"
            required
            oninvalid="this.setCustomValidity('Please enter country/region')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div>
          <label for="address" className="text-gray-600">
            {dict(lang, "Street")} <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="input-box"
            defaultValue={user?.ShippingAddress?.street}
            required
            oninvalid="this.setCustomValidity('Please enter your street address')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div>
          <label for="city" className="text-gray-600">
            {dict(lang, "City")} <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            name="city"
            id="city"
            className="input-box"
            defaultValue={user?.ShippingAddress?.city}
            required
            oninvalid="this.setCustomValidity('Please enter city')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div>
          <label for="phone" className="text-gray-600">
            {dict(lang, "Phone Number")} <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="input-box"
            defaultValue={user?.ShippingAddress?.phone}
            placeholder="01XXXXXXXXX"
            pattern="01[3-9][0-9]{8}"
            required
            oninvalid="this.setCustomValidity('Please enter a valid Bangladeshi phone number (e.g., 01712345678)')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div>
          <label for="email" className="text-gray-600">
            {dict(lang, "Email")} <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="input-box"
            defaultValue={user?.ShippingAddress?.email}
            placeholder="youremail.@domain.com"
            required
            oninvalid="this.setCustomValidity('Please enter a valid email address (e.g., x@gmail.com)')"
            oninput="this.setCustomValidity('')"
          />
        </div>
      </div>
    </>
  );
}
