"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const handleLogout = async () => {
    signOut({ callbackUrl: "/login" });
  };
  return (
    <button
      className="text-gray-200 hover:text-white transition"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
