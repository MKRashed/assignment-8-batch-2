"use client";

import Image from "next/image";

import { useState } from "react";

import SearchModal from "@/components/Modal";

export default function CompareMovies() {
  const [movieSlots, setMovieSlots] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentSlotId, setCurrentSlotId] = useState(null);

  // Add a new slot
  const addMovieSlot = () => {
    setMovieSlots([
      ...movieSlots,
      { id: Date.now(), movie: null }, // Each slot has a unique ID and an optional movie object
    ]);
  };

  // Remove a slot
  const removeSlot = (id) => {
    setMovieSlots(movieSlots.filter((slot) => slot.id !== id));
  };

  // Open modal to select a movie
  const openModal = (id) => {
    setCurrentSlotId(id); // Store the ID of the slot being updated
    setModalOpen(true); // Open the modal
  };

  // Handle movie selection from the modal
  const handleMovieSelect = async (selectedMovie) => {
    const response = await fetch(`/api/movie-details/${selectedMovie.id}`);
    const data = await response.json();
    setMovieSlots(
      movieSlots.map((slot) =>
        slot.id === currentSlotId ? { ...slot, movie: data } : slot
      )
    );

    console.log({ selectedMovie }, movieSlots);
    setModalOpen(false); // Close the modal after selection
  };

  // Render a movie card or a placeholder
  const renderSlot = (slot) => {
    if (slot.movie) {
      // If a movie is selected, render its details
      return (
        <div key={slot.id} className="bg-zinc-900 rounded-lg p-4 flex flex-col">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => removeSlot(slot.id)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
          <div className="grid grid-cols-5 gap-8">
            <div className="col-span-2">
              <Image
                src={`https://image.tmdb.org/t/p/original/${slot.movie?.poster_path}`}
                alt={slot.movie.title}
                className="w-full rounded-lg mb-4 object-contain max-h-full"
                width={300}
                height={350}
              />
              <h2 className="text-xl font-bold mb-2 text-center">
                {slot.movie.title}
              </h2>
            </div>
            <div className="w-full space-y-4 col-span-3">
              <div className="bg-zinc-800 p-3 rounded">
                <span className="text-gray-400">Rating:</span>
                <span className="float-right">
                  {slot.movie.vote_average}/10
                </span>
              </div>
              <div className="bg-zinc-800 p-3 rounded">
                <span className="text-gray-400">Release Year:</span>
                <span className="float-right">
                  {slot.movie.release_date?.slice(0, 4)}
                </span>
              </div>
              <div className="bg-zinc-800 p-3 rounded">
                <span className="text-gray-400">Runtime:</span>
                <span className="float-right">{slot.movie.runtime} min</span>
              </div>
              <div className="bg-zinc-800 p-3 rounded">
                <span className="text-gray-400">Genres:</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {slot?.movie?.genres.length > 0 &&
                    slot.movie.genres.map((genre) => (
                      <span
                        key={genre.id}
                        className="bg-zinc-700 px-2 py-1 rounded-full text-sm"
                      >
                        {genre.name}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      // Placeholder for selecting a movie
      return (
        <div
          key={slot.id}
          className="bg-zinc-900 rounded-lg p-4 flex flex-col min-h-[400px]"
        >
          <div className="flex justify-end mb-4">
            <button
              onClick={() => removeSlot(slot.id)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
          <div className="flex-grow flex flex-col items-center justify-center">
            <button
              onClick={() => openModal(slot.id)}
              className="bg-zinc-800 text-white px-6 py-3 rounded hover:bg-zinc-700 transition-colors cursor-pointer"
            >
              Select Movie
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="bg-body text-light min-h-screen">
      <div className="container mx-auto pt-24 pb-8">
        <div className="mx-auto px-4 pt-24 pb-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Compare Movies</h1>
            <button
              onClick={addMovieSlot}
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Add Movie +
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {movieSlots.map((slot) => renderSlot(slot))}
          </div>

          {/* Modal Component */}
          {isModalOpen && (
            <SearchModal
              onClose={() => setModalOpen(false)}
              onSelect={handleMovieSelect}
            />
          )}
        </div>
      </div>
    </div>
  );
}
