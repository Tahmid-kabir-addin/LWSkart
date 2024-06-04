"use client";

import { dict } from "@/app/dict/dict";
import { signIn } from "next-auth/react";

export default function SocialLogin({ lang }) {
  const handleGoogleAuth = async () => {
    signIn("google", { callbackUrl: `/${lang}` });
  };

  const handleFacebookAuth = async () => {
    signIn("facebook", { callbackUrl: `/${lang}` });
  };
  return (
    <>
      <div className="mt-6 flex justify-center relative">
        <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
          {dict(lang, "Or login with")}
        </div>
        <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
      </div>
      <div className="mt-4 flex gap-4">
        <button
          className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
          onClick={handleFacebookAuth}
        >
          {dict(lang, "Facebook")}
        </button>

        <button
          className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
          onClick={handleGoogleAuth}
        >
          {dict(lang, "Google")}
        </button>
      </div>
    </>
  );
}
