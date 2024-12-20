'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
          popularVideos.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
              <Link href={`details/${item?.id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} 
                  alt="Venom: The Last Dance"
                  className="w-full rounded-lg"
                  width={300}
                  height={350}
                />
              </Link>
            </div>
          ))
        }
        
      </div>
    </section>
  );
}
