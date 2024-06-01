"use client";
import { login } from "@/app/actions/UserActions";
import { dict } from "@/app/dict/dict";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import FormError from "./FormError";
import SubmitButton from "./SubmitButton";

export default function LoginForm({ lang }) {
  const [state, formAction] = useFormState(login, null);
  console.log("🚀 ~ LoginForm ~ state:", state);
  const router = useRouter();
  if (state?.success) {
    router.push("/");
  }

  return (
    <form action={formAction} autoComplete="off">
      <div className="space-y-2">
        <div>
          <label htmlFor="email" className="text-gray-600 mb-2 block">
            {dict(lang, "Email")}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="youremail.@domain.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-gray-600 mb-2 block">
            {dict(lang, "Password")}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="*******"
          />
        </div>
      </div>
      {/* <div className="flex items-center justify-between mt-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="text-primary focus:ring-0 rounded-sm cursor-pointer"
          />
          <label
            htmlFor="remember"
            className="text-gray-600 ml-3 cursor-pointer"
          >
            Remember me
          </label>
        </div>
        <Link href="#" className="text-primary">
          Forgot password
        </Link>
      </div> */}
      {state?.error && <FormError error={state.error} />}
      <div className="mt-4">
        <SubmitButton buttonText={dict(lang, "Login")} />
      </div>
    </form>
    // <form className="login-form" action={formAction}>
    //   <div>
    //     <label htmlFor="email">Email Address</label>
    //     <input type="email" name="email" id="email" />
    //   </div>

    //   <div>
    //     <label htmlFor="password">Password</label>
    //     <input type="password" name="password" id="password" />
    //   </div>
    //   {state?.error && <FormError error={state.error} />}
    //   <SubmitButton buttonText={"Login"} />
    // </form>
  );
}
