'use client'
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function TopRatedMovies() {

  TopRatedMovies

  const [topRatedMovies, setTopRatedMovies] = useState([]);
    
      useEffect(() => {
          async function fetchData() {
              const response = await fetch('/api/top-rated')
              const data = await response.json();
              setTopRatedMovies(data.results);
          }
    
          fetchData();
      }, []);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Top Rated</h2>
      <div id="topRatedMovies" className="flex space-x-4 overflow-x-auto pb-4">
        {
          topRatedMovies.map( (item) => <MovieCard key={item.id} movie={item} />)
        }
      </div>
    </div>
  );
}
