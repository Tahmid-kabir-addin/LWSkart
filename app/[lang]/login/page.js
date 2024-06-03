import LoginForm from "@/app/components/auth/LoginForm";
import SocialLogin from "@/app/components/auth/SocialLogin";
import { dict } from "@/app/dict/dict";
import Link from "next/link";

export default function page({ params: { lang } }) {
  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">
          {dict(lang, "Login")}
        </h2>
        <p className="text-gray-600 mb-6 text-sm">{}</p>
        <LoginForm lang={lang} />
        {/* <!-- login with --> */}
        <SocialLogin lang={lang} />
        {/* <!-- ./login with --> */}

        <p className="mt-4 text-center text-gray-600">
          {dict(lang, "Don't have account?")}{" "}
          <Link href={`/${lang}/register`} className="text-primary">
            {dict(lang, "Register Now")}
          </Link>
        </p>
      </div>
    </div>
  );
}
