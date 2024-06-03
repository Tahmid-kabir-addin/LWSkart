import { Tailwind } from "@fileforge/react-print";

export const OrderPdf = ({ data }) => {
  return (
    <Tailwind>
      <div class="bg-gray-100">
        <div class="max-w-4xl mx-auto my-10 bg-white p-8 rounded-lg shadow-md">
          <div class="flex justify-between items-center mb-8">
            <div>
              <h1 class="text-3xl font-bold">Invoice</h1>
              <p class="text-gray-600">Order #12345</p>
            </div>
            <div>
              <h2 class="text-xl font-semibold">LWSkart</h2>
              <p class="text-gray-600">University Gate</p>
              <p class="text-gray-600">Sylhet Sadar, Sylhet</p>
              <p class="text-gray-600">lwskart@gmail.com</p>
            </div>
          </div>
          <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Billing Details</h2>
            <p class="text-gray-600">
              <span class="font-semibold">Name:</span> {data.name}
            </p>
            {data.compnay && (
              <p class="text-gray-600">
                <span class="font-semibold">Company:</span>
                {data.compnay}
              </p>
            )}
            <p class="text-gray-600">
              <span class="font-semibold">Region:</span> {data.region}
            </p>
            <p class="text-gray-600">
              <span class="font-semibold">Street:</span> {data.address}
            </p>
            <p class="text-gray-600">
              <span class="font-semibold">City:</span> {data.city}
            </p>
            <p class="text-gray-600">
              <span class="font-semibold">Phone:</span> {data.phone}
            </p>
            <p class="text-gray-600">
              <span class="font-semibold">Email:</span> {data.email}
            </p>
          </div>
          <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Order Summary</h2>
            <table class="w-full text-left table-auto">
              <thead>
                <tr class="bg-gray-200">
                  <th class="px-4 py-2">Product</th>
                  <th class="px-4 py-2">Quantity</th>
                  <th class="px-4 py-2">Price</th>
                  <th class="px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {data.cartItems.map((item) => (
                  <tr key={item.id}>
                    <td class="border px-4 py-2">{item.name}</td>
                    <td class="border px-4 py-2">{item.quantity}</td>
                    <td class="border px-4 py-2">${item.price}</td>
                    <td class="border px-4 py-2">
                      ${item.quantity * item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td
                    class="border px-4 py-2 font-semibold text-right"
                    colspan="3"
                  >
                    Subtotal
                  </td>
                  <td class="border px-4 py-2">
                    ${parseFloat(data.subTotalPrice).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td
                    class="border px-4 py-2 font-semibold text-right"
                    colspan="3"
                  >
                    Shipping
                  </td>
                  <td class="border px-4 py-2">${data.shippingPrice}</td>
                </tr>
                <tr>
                  <td
                    class="border px-4 py-2 font-semibold text-right"
                    colspan="3"
                  >
                    Total
                  </td>
                  <td class="border px-4 py-2">${data.totalPrice}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">
              Thank you for your purchase!
            </h2>
            <p class="text-gray-600">
              If you have any questions about this invoice, please contact us at
              lwskart@gmail.com.
            </p>
          </div>
        </div>
      </div>
    </Tailwind>
  );
};
