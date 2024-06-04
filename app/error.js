"use client";
import Link from "next/link";

export const metadata = {
  title: "Error! - LWSkart",
  description: "E-commerce website for your home appliances",
};

export default function error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl text-red-500 font-bold mb-4">Oops!</h1>
        <p className="text-gray-700 mb-4">
          Something went wrong. Please try again later.
        </p>
        <Link href="/">
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}
