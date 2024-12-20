import { fetchMovieDetails } from '@/lib/api/fetchMovies';

export async function GET(req, { params }) {
    const { id } = params;
    try {
        const data = await fetchMovieDetails(id); 
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}