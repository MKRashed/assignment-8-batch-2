"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchResult() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    async function fetchMovies() {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/search-movies?query=${encodeURIComponent(query)}`
        );
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [query]);

  if (!query) {
    return <div className="p-8">Please enter a search term.</div>;
  }

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Search Results for {query}</h1>
        <p className="text-gray-400">Found { movies.length } results</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            href={`details/${movie?.id}`}
            className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="Avatar: The Way of Water"
              className="w-full aspect-[2/3] object-cover"
              width={300}
              height={400}
            />
            <div className="p-4">
              <h3 className="font-bold mb-2">{movie?.title}</h3>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{movie.release_date?.slice(0, 4) || "N/A"}</span>
                <span>⭐ {movie?.vote_average}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
