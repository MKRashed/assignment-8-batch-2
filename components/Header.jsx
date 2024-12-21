"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };
  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-black to-transparent">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-red-600 text-4xl font-bold">
            MOVIE DB
          </Link>
          <div className="ml-8 space-x-4">
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="/compare" className="text-white hover:text-gray-300">
              Compare Movies
            </Link>
            <Link
              href="/watch-later"
              className="text-white hover:text-gray-300"
            >
              Watch Later
            </Link>
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            id="searchInput"
            placeholder="Search movies..."
            className="bg-black bg-opacity-50 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-white"
            value={query}
            onChange={(e) => setQuery(e.target.value)} // Update query state
            onKeyDown={handleKeyDown} // Handle Enter key press
          />
        </div>
      </div>
    </nav>
  );
}
