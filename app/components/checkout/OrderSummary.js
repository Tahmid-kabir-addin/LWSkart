import Link from "next/link";

export default function OrderSummary() {
  return (
    <div class="col-span-4 border border-gray-200 p-4 rounded">
      <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">
        order summary
      </h4>
      <div class="space-y-2">
        <div class="flex justify-between">
          <div>
            <h5 class="text-gray-800 font-medium">Italian shape sofa</h5>
            <p class="text-sm text-gray-600">Size: M</p>
          </div>
          <p class="text-gray-600">x3</p>
          <p class="text-gray-800 font-medium">$320</p>
        </div>
        <div class="flex justify-between">
          <div>
            <h5 class="text-gray-800 font-medium">Italian shape sofa</h5>
            <p class="text-sm text-gray-600">Size: M</p>
          </div>
          <p class="text-gray-600">x3</p>
          <p class="text-gray-800 font-medium">$320</p>
        </div>
        <div class="flex justify-between">
          <div>
            <h5 class="text-gray-800 font-medium">Italian shape sofa</h5>
            <p class="text-sm text-gray-600">Size: M</p>
          </div>
          <p class="text-gray-600">x3</p>
          <p class="text-gray-800 font-medium">$320</p>
        </div>
        <div class="flex justify-between">
          <div>
            <h5 class="text-gray-800 font-medium">Italian shape sofa</h5>
            <p class="text-sm text-gray-600">Size: M</p>
          </div>
          <p class="text-gray-600">x3</p>
          <p class="text-gray-800 font-medium">$320</p>
        </div>
      </div>

      <div class="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>subtotal</p>
        <p>$1280</p>
      </div>

      <div class="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>shipping</p>
        <p>Free</p>
      </div>

      <div class="flex justify-between text-gray-800 font-medium py-3 uppercas">
        <p class="font-semibold">Total</p>
        <p>$1280</p>
      </div>

      <div class="flex items-center mb-4 mt-2">
        <input
          type="checkbox"
          name="aggrement"
          id="aggrement"
          class="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
        />
        <label
          for="aggrement"
          class="text-gray-600 ml-3 cursor-pointer text-sm"
        >
          I agree to the{" "}
          <Link href="#" class="text-primary">
            terms & conditions
          </Link>
        </label>
      </div>

      <Link
        href="#"
        class="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
      >
        Place order
      </Link>
    </div>
  );
}
