"use client";
import SearchResults from "@/app/components/search/SearchResults";

export const metadata = {
  title: "Search - LWSkart",
  description: "E-commerce website for your home appliances",
};

export default function SearchPage({ params: { query } }) {
  return <SearchResults query={query} />;
}
