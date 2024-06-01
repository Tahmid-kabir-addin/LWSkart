"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ buttonText, isDisabled = false, lang }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`${
        pending || isDisabled ? "bg-[#f7a1aa]" : "bg-primary border"
      } block w-full py-2 text-center text-white border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium`}
      disabled={pending || isDisabled}
    >
      {pending ? "Submitting..." : buttonText}
    </button>
  );
}
