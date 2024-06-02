"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  // change lang of the link when a button is clicked
  const pathName = usePathname();
  const router = useRouter();
  const [lang, setLang] = useState(pathName.split("/")[1]);
  const [changed, setChanged] = useState(false);
  const onLanguageChange = (changedLang) => {
    if (lang !== changedLang) {
      setChanged(true);
      setLang(changedLang);
    }
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    // currentPath is like /en/account. now we need to replace /en with /bn rest will be same
    const newPath = currentPath.replace(/^\/[a-zA-Z]{2}/, `/${lang}`);
    if (changed) router.push(newPath);
  }, [lang]);

  return (
    <div className="flex justify-center p-4">
      <div className="flex space-x-4">
        <button
          className={`p-3 flex items-center border border-gray-300 rounded-lg shadow-md text-sm font-medium ${
            lang === "en"
              ? "bg-gray-200 text-gray-900"
              : "bg-white text-gray-700"
          } hover:bg-gray-100 focus:outline-none`}
          onClick={() => onLanguageChange("en")}
        >
          <span className="text-md">En</span>
          <span className="ml-2">
            <Image
              src="https://img.icons8.com/?size=512&id=t3NE3BsOAQwq&format=png"
              width="20"
              height="20"
              alt="English"
            />
          </span>
        </button>

        <button
          className={`p-3 flex items-center border border-gray-300 rounded-lg shadow-md text-sm font-medium ${
            lang === "bn"
              ? "bg-gray-200 text-gray-900"
              : "bg-white text-gray-700"
          } hover:bg-gray-100 focus:outline-none`}
          onClick={() => onLanguageChange("bn")}
        >
          <span className="text-md">বাং</span>
          <span className="ml-2">
            <Image
              width="20"
              height="20"
              src="https://img.icons8.com/color/48/bangladesh-circular.png"
              alt="Bangla"
            />
          </span>
        </button>
      </div>
    </div>
  );
}
