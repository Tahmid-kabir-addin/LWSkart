"use client";

import { dict } from "@/app/dict/dict";

export default function QuantityButtons({
  stock,
  handleIncrement,
  handleDecrement,
  quantity,
  lang,
}) {
  return (
    <div className="mt-4">
      <h3 className="text-sm text-gray-800 uppercase mb-1">
        {dict(lang, "Quantity")}
      </h3>
      <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
        <button
          className="h-8 w-8 text-xl bg-gray-300 flex items-center justify-center cursor-pointer select-none"
          disabled={quantity === 1}
          onClick={handleDecrement}
        >
          -
        </button>
        <div className="h-8 w-8 text-base flex items-center justify-center">
          {quantity}
        </div>
        <button
          className={`h-8 w-8 text-xl flex bg-gray-300 text-black items-center justify-center cursor-pointer select-none ${
            stock && quantity === stock ? "bg-white" : ""
          }`}
          disabled={stock && stock < 1}
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}
