import { searchMovies } from "@/lib/api/fetchMovies";

export async function GET(req) {
  const { searchParams } = new URL(req.url); // Extract query parameters
  const query = searchParams.get("query"); // Get the 'query' parameter

  if (!query) {
    return new Response(
      JSON.stringify({ error: "Query parameter is required" }),
      {
        status: 400,
      }
    );
  }

  try {
    const data = await searchMovies(query); // Use utility function to fetch data
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
