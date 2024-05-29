"use client";
import { getUserInfo } from "@/app/actions/OrderAction";
import { useEffect, useState } from "react";

export default function CheckoutForm() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const init = async () => {
      const res = await getUserInfo();
      if (res.success) setUser(res.user);
      else throw new Error(res.error);
    };
    init();
  }, []);
  return (
    <>
      <input hidden type="text" name="userId" value={user?.id} />
      <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
      <div className="space-y-4">
        <div>
          <label for="first-name" className="text-gray-600">
            Name <span className="text-primary">*</span>
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
            Company
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
            Country/Region
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
            Street address
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
            City
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
            Phone number
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
            Email address
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
