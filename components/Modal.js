"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SearchModal({ onClose, onSelect }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `/api/search-movies?query=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      setMovies(data.results);
    }
    fetchData();
  }, [query]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Search Movie</h2>
          <button className="text-gray-400 hover:text-white" onClick={onClose}>
            ✕
          </button>
        </div>
        <input
          type="text"
          placeholder="Type movie name..."
          className="w-full bg-zinc-800 text-white px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="max-h-96 overflow-y-auto">
          {movies?.length > 0 &&
            movies.map((movie) => (
              <button
                type="button"
                key={movie.id}
                onClick={() => onSelect(movie)}
                className="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                  className="w-16 h-24 object-cover rounded"
                  width={64}
                  height={96}
                />
                <div>
                  <h3 className="font-bold">{movie.title}</h3>
                  <p className="text-sm text-gray-400">
                    {movie.release_date?.slice(0, 4)}
                  </p>
                </div>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
