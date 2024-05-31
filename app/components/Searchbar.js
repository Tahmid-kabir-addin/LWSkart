"use client";
import SearchIcon from "@/public/assets/images/icons/SearchIcon";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function Searchbar({ q = "" }) {
  const [query, setQuery] = useState(q);
  const debouncedSearch = useDebounce(query);
  const router = useRouter();

  useEffect(() => {
    if (debouncedSearch) {
      router.replace(`/search/${debouncedSearch}`);
    }
  }, [debouncedSearch, router]);

  return (
    <div className="w-full max-w-xl relative flex">
      <span className="absolute left-4 top-3 text-lg text-gray-400">
        <SearchIcon />
      </span>
      <input
        type="text"
        name="search"
        id="search"
        className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
        placeholder="What are you looking for?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-primary border border-primary text-white px-8 py-3 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex">
        Search
      </button>
    </div>
  );
}
