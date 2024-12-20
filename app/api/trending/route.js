
const TMDB_API_KEY = process.env.TMDB_API_KEY;

const BASE_URL = process.env.BASE_URL;

export async function GET(request) {
    try {

        const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${TMDB_API_KEY}`);

        if (!response.ok) {
            throw new Error('Failed to fetch popular movies');
        }
        const data = await response.json();
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
