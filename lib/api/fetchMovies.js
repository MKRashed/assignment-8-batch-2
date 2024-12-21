const TMDB_API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = process.env.BASE_URL;

export async function fetchTrendingMovies() {
  const url = `${BASE_URL}/trending/movie/day?api_key=${TMDB_API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch top-rated movies");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
    throw error;
  }
}

export async function fetchTopRatedMovies() {
  const url = `${BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch top-rated movies");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
    throw error;
  }
}

export async function fetchPopularMovies() {
  const url = `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch top-rated movies");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
    throw error;
  }
}

export async function fetchMovieDetails(id) {
  const url = `${BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch top-rated movies");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
    throw error;
  }
}

export async function fetchSimilarMovies(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/similar?api_key=${TMDB_API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch top-rated movies");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
    throw error;
  }
}

export async function searchMovies(query) {
  const url = `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
    throw error;
  }
}
export async function findMovies(id) {
  const url = `${BASE_URL}/3/find/${id}?api_key=${TMDB_API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
    throw error;
  }
}
