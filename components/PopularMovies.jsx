'use client'
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function PopularMovies() {

  const [popularVideos, setPopularVideos] = useState([]);
  
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/popular')
            const data = await response.json();
            setPopularVideos(data.results);
        }
  
        fetchData();
    }, []);


  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Popular on MOVIE DB</h2>
      <div id="popularMovies" className="flex space-x-4 overflow-x-auto pb-4">

        {
          popularVideos.map((item) => <MovieCard key={item.id} movie={item} />)
        }
        
      </div>
    </section>
  );
}
