"use client";

import { signOut } from "next-auth/react";
import { dict } from "../dict/dict";

export default function LogoutButton({ lang }) {
  const handleLogout = async () => {
    signOut({ callbackUrl: "/login" });
  };
  return (
    <button
      className="text-gray-200 hover:text-white transition"
      onClick={handleLogout}
    >
      {dict(lang, "Logout")}
    </button>
  );
}
