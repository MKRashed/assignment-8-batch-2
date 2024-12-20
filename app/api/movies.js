const TMDB_API_KEY = 'your_tmdb_api_key';
const BASE_URL = 'https://api.themoviedb.org/3';

export default async function handler(req, res) {
    const { endpoint, ...queryParams } = req.query;

    const queryString = new URLSearchParams({
        api_key: TMDB_API_KEY,
        ...queryParams,
    }).toString();

    try {
        const response = await fetch(`${BASE_URL}/${endpoint}?${queryString}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data from TMDB');
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
