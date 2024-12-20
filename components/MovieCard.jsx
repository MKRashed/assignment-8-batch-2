import Image from "next/image";
import Link from "next/link";

export default function MovieCard({movie}){
    return (
        <div key={movie.id} className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
            <Link href={`/details/${movie?.id}`}>
            <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                alt="The Shawshank Redemption"
                className="w-full rounded-lg"
                width={300}
                height={350}
            />
            </Link>
        </div>
    );
}