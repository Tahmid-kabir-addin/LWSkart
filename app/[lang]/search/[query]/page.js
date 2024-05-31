"use client";
import SearchResults from "@/app/components/search/SearchResults";

export default function SearchPage({ params: { query } }) {
  return <SearchResults query={query} />;
}
