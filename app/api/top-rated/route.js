import { fetchTopRatedMovies } from '@/lib/api/fetchMovies';

export async function GET() {
    try {
        const data = await fetchTopRatedMovies(); 
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}