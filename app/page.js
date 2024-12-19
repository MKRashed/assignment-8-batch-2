import Hero from "@/components/Hero";
import PopularMovies from "@/components/PopularMovies";
import TopRatedMovies from "@/components/TopRatedMovies";
import TrendingMovies from "@/components/TrendingMovies";
export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <div class="container mx-auto px-4 py-8">
        <TrendingMovies />
        <PopularMovies />
        <TopRatedMovies />
      </div>
    </div>
  );
}
