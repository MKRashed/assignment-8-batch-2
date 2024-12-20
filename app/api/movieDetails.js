const TMDB_API_KEY = process.env.TMDB_API_KEY;

const BASE_URL = process.env.BASE_URL;

export default async function handler(req, res) {

    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ error: 'Movie ID is required' });
    }

    try {

        const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}`);

        if (!response.ok) {
            throw new Error('Failed to fetch movie details');
        }

        const data = await response.json();

        res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
