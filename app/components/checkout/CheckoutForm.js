export default function CheckoutForm() {
  return (
    <div class="col-span-8 border border-gray-200 p-4 rounded">
      <h3 class="text-lg font-medium capitalize mb-4">Checkout</h3>
      <div class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="first-name" class="text-gray-600">
              First Name <span class="text-primary">*</span>
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              class="input-box"
            />
          </div>
          <div>
            <label for="last-name" class="text-gray-600">
              Last Name <span class="text-primary">*</span>
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              class="input-box"
            />
          </div>
        </div>
        <div>
          <label for="company" class="text-gray-600">
            Company
          </label>
          <input type="text" name="company" id="company" class="input-box" />
        </div>
        <div>
          <label for="region" class="text-gray-600">
            Country/Region
          </label>
          <input type="text" name="region" id="region" class="input-box" />
        </div>
        <div>
          <label for="address" class="text-gray-600">
            Street address
          </label>
          <input type="text" name="address" id="address" class="input-box" />
        </div>
        <div>
          <label for="city" class="text-gray-600">
            City
          </label>
          <input type="text" name="city" id="city" class="input-box" />
        </div>
        <div>
          <label for="phone" class="text-gray-600">
            Phone number
          </label>
          <input type="text" name="phone" id="phone" class="input-box" />
        </div>
        <div>
          <label for="email" class="text-gray-600">
            Email address
          </label>
          <input type="email" name="email" id="email" class="input-box" />
        </div>
        <div>
          <label for="company" class="text-gray-600">
            Company
          </label>
          <input type="text" name="company" id="company" class="input-box" />
        </div>
      </div>
    </div>
  );
}
