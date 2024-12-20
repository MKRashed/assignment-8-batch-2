'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
          topRatedMovies.map( (item) => (
            <div key={item.id} className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
              <Link href={`details/${item?.id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} 
                  alt="The Shawshank Redemption"
                  className="w-full rounded-lg"
                  width={300}
                  height={350}
                />
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}
