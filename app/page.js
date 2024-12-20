import Hero from "@/components/Hero";
import PopularMovies from "@/components/PopularMovies";
import TopRatedMovies from "@/components/TopRatedMovies";
import TrendingMovies from "@/components/TrendingMovies";
export default async function Page() {

  const response = await fetch('http://localhost:3000/api/trending', { cache: 'no-store' });

  const trendingVideos = await response.json();

  return (
    <div className="bg-black text-white">
      <Hero />
      <div class="container mx-auto px-4 py-8">
        <TrendingMovies trendingVideos={trendingVideos?.results} />
        <PopularMovies />
        <TopRatedMovies />
      </div>
    </div>
  );
}
