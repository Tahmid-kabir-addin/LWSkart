"use client";
import SearchResults from "@/app/components/search/SearchResults";
import { useRouter } from "next/navigation";

export default function SearchPage({ params: { lang } }) {
  const router = useRouter();
  return (
    <>
      <SearchResults lang={lang} />
    </>
  );
}
