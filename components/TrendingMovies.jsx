'use client';

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function TrendingMovies( {} ) {

  const [trendingVideos, setTrendingVideos] = useState([]);

  useEffect(() => {
      async function fetchData() {
          const response = await fetch('/api/trending'); 
          const data = await response.json();
          setTrendingVideos(data.results);
      }

      fetchData();
  }, []);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Trending Now </h2>
      <div id="trendingMovies" className="flex space-x-4 overflow-x-auto pb-4">
       {
          trendingVideos.map((item) => (
            <div
              key={item.id} 
              className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform"
            >
              <Link href={`details/${item?.id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} 
                  alt={item.title || "Movie"}
                  className="w-full rounded-lg"
                  width={300}
                  height={350}
                />
                <div className="mt-2">
                  <h3 className="text-light text-sm font-bold truncate">{item.title || "Untitled"}</h3>
                  <p className="text-primary text-xs">{item.release_date?.slice(0, 4) || "N/A"}</p>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}
