const TMDB_API_KEY = process.env.TMDB_API_KEY;

const BASE_URL = process.env.BASE_URL;

export async function GET(req, { params }) {
    const { id } = params; // Extract movie ID from the URL

    if (!id) {
        return new Response(JSON.stringify({ error: 'Movie ID is required' }), { status: 400 });
    }

    try {
        const response = await fetch(`${BASE_URL}/movie/${id}/similar?api_key=${TMDB_API_KEY}`);

        if (!response.ok) {
            throw new Error('Failed to fetch related movies');
        }

        const data = await response.json();

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
