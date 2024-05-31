"use client";
import { useRouter } from "next/navigation";

export default function SearchPage() {
  const router = useRouter();
  router.push("/");
  return null;
}
