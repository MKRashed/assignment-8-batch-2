'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page({ params }) {

  const { id } = params;

  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
            async function fetchData() {
                const response = await fetch(`/api/movie-details/${id}`)
                const data = await response.json();
                setMovieDetails(data);
            }
      
            fetchData();
        }, []);

  return (
    <div className="bg-black text-white">
      <div id="movieDetails" className="min-h-screen pt-20 mb-8">
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <Image
              src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`} 
              alt="Smile 2"
              className="w-full h-full object-cover"
              width={300}
              height={350}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70"></div>
          </div>

          <div className="relative container mx-auto px-4 pt-32">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`} 
                  alt="Smile 2"
                  className="w-full rounded-lg shadow-lg"
                  width={300}
                  height={350}
                />
              </div>

              <div className="md:w-2/3">
                <h1 className="text-4xl font-bold mb-4">{movieDetails?.original_title}</h1>

                <div className="flex items-center mb-4 space-x-4">
                  <span className="text-green-500"> {movieDetails?.release_date} </span>
                  <span>| </span>
                  <span>{movieDetails?.runtime} min</span>
                </div>

                <p className="text-lg mb-6">
                {movieDetails?.overview}
                </p>

                <div className="mb-6">
                  <h3 className="text-gray-400 mb-2">Genres</h3>
                  <div className="flex flex-wrap gap-2">
                      { 
                        movieDetails?.genres?.map( (item) => (
                          <span key={item.id} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                            {item?.name}
                          </span>

                        ))
                      }
                    </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-gray-400 mb-2">Cast</h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="text-center">
                      <Image
                        src="https://image.tmdb.org/t/p/original/6OLe7TskbEvYpo36eITfX91VoCP.jpg"
                        alt="Naomi Scott"
                        className="w-24 h-24 rounded-full object-cover mb-2"
                        width={300}
                        height={350}
                      />
                      <p className="text-sm">Naomi Scott</p>
                    </div>

                    <div className="text-center">
                      <Image
                        src="https://image.tmdb.org/t/p/original/44sxIdGtYN24R14OmnZbCpcd8J8.jpg"
                        alt="Rosemarie DeWitt"
                        className="w-24 h-24 rounded-full object-cover mb-2"
                        width={300}
                        height={350}
                      />
                      <p className="text-sm">Rosemarie DeWitt</p>
                    </div>

                    <div className="text-center">
                      <Image
                        src="https://image.tmdb.org/t/p/original/j7Zub5J9PgCnsfgEC5QCr160JtH.jpg"
                        alt="Lukas Gage"
                        className="w-24 h-24 rounded-full object-cover mb-2"
                        width={300}
                        height={350}
                      />
                      <p className="text-sm">Lukas Gage</p>
                    </div>

                    <div className="text-center">
                      <Image
                        src="https://image.tmdb.org/t/p/original/22JmiXEKoIHTKAdZaxOiS5wVHnM.jpg"
                        alt="Miles Gutierrez-Riley"
                        className="w-24 h-24 rounded-full object-cover mb-2"
                        width={300}
                        height={350}
                      />
                      <p className="text-sm">Miles Gutierrez-Riley</p>
                    </div>

                    <div className="text-center">
                      <Image
                        src="https://image.tmdb.org/t/p/original/pGi9CnzEG4cLa2viUP89yvlPCyR.jpg"
                        alt="Peter Jacobson"
                        className="w-24 h-24 rounded-full object-cover mb-2"
                        width={300}
                        height={350}
                      />
                      <p className="text-sm">Peter Jacobson</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-4">
                    <div className="text-center">
                      <button className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-file-plus"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                          <path d="M12 11l0 6" />
                          <path d="M9 14l6 0" />
                        </svg>
                        Add to Wacth List
                      </button>
                    </div>

                    <div className="text-center">
                      <button className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg text-green-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-checks"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M7 12l5 5l10 -10" />
                          <path d="M2 12l5 5m5 -5l5 -5" />
                        </svg>
                        Added to Wacth List
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-gray-400 mb-2">Share on social media</h3>
                  <div className="flex flex-wrap gap-4">
                    <button className="text-center cursor-pointer">
                      <Image
                        src="http://facebook.com/favicon.ico"
                        alt="Facebook"
                        className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
                        width={16}
                        height={16}
                      />
                      <p className="text-sm">Facebook</p>
                    </button>

                    <button className="text-center cursor-pointer">
                      <Image
                        src="http://x.com/favicon.ico"
                        alt="Facebook"
                        className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
                        width={150}
                        height={150}
                      />
                      <p className="text-sm">X</p>
                    </button>

                    <button className="text-center cursor-pointer">
                      <Image
                        src="http://linkedin.com/favicon.ico"
                        alt="Facebook"
                        className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
                        width={300}
                        height={350}
                      />
                      <p className="text-sm">Linkedin</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Similar Movies Section --> */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">More Like This</h2>

        <div className="flex space-x-4 overflow-x-auto pb-4">
          <div className="flex w-48 h-[288px] rounded-lg cursor-pointer hover:scale-105 transition-transform">
            <div className="w-48 h-[288px] rounded-lg bg-zinc-800 relative">
              <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
                <div className="animate-pulse w-full h-full bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-[length:200%_100%] animate-[shimmer_.5s_infinite]"></div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
            <a href="details.html">
              <Image
                src="https://image.tmdb.org/t/p/original/3LjHC2CWDkzoiPehf3GViujws0.jpg"
                alt="The Good German"
                className="w-full rounded-lg"
                width={300}
                height={350}
              />
            </a>
          </div>
          <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
            <a href="details.html">
              <Image
                src="https://image.tmdb.org/t/p/original/x21s3p5wPww534nYj1cWakTcqz4.jpg"
                alt="Lucky Number Slevin"
                className="w-full rounded-lg"
                width={300}
                height={350}
              />
            </a>
          </div>
          <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
            <a href="details.html">
              <Image
                src="https://image.tmdb.org/t/p/original/5GjUN65VjfqClVDMF0o1mT471U2.jpg"
                alt="Las Poquianchis"
                className="w-full rounded-lg"
                width={300}
                height={350}
              />
            </a>
          </div>
          <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
            <a href="details.html">
              <Image
                src="https://image.tmdb.org/t/p/original/w9RaPHov8oM5cnzeE27isnFMsvS.jpg"
                alt="Ghost"
                className="w-full rounded-lg"
                width={300}
                height={350}
              />
            </a>
          </div>
          <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
            <a href="details.html">
              <Image
                src="https://image.tmdb.org/t/p/original/hlBm0wromGeiFBGlV7RzjwQBPbw.jpg"
                alt="Secret Beyond the Door..."
                className="w-full rounded-lg"
                width={300}
                height={350}
              />
            </a>
          </div>
          <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
            <a href="details.html">
              <Image
                src="https://image.tmdb.org/t/p/original/vPYgvd2MwHlxTamAOjwVQp4qs1W.jpg"
                alt="Constantine"
                className="w-full rounded-lg"
                width={300}
                height={350}
              />
            </a>
          </div>
          <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
            <a href="details.html">
              <Image
                src="https://image.tmdb.org/t/p/original/gghD2ZIPjMzLnnBuT3AZQGYnIW9.jpg"
                alt="The Ring"
                className="w-full rounded-lg"
                width={300}
                height={350}
              />
            </a>
          </div>
          <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
            <a href="details.html">
              <Image
                src="https://image.tmdb.org/t/p/original/xqS5Y8f6EQy9i9YFuPuTlPRopV4.jpg"
                alt="Next Door"
                className="w-full rounded-lg"
                width={300}
                height={350}
              />
            </a>
          </div>
          <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
            <a href="details.html">
              <Image
                src="https://image.tmdb.org/t/p/original/4SFvqrlSigAt9tnhXFSMyKeJWQk.jpg"
                alt="Frenzy"
                className="w-full rounded-lg"
                width={300}
                height={350}
              />
            </a>
          </div>
          <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
            <a href="details.html">
              <Image
                src="https://image.tmdb.org/t/p/original/cN3ijEwsn4kBaRuHfcJpAQJbeWe.jpg"
                alt="Jaws 2"
                className="w-full rounded-lg"
                width={300}
                height={350}
              />
            </a>
          </div>
          <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
            <a href="details.html">
              <Image
                src="https://image.tmdb.org/t/p/original/ebYw9tR0iqBzDGA6HVBhtd2xJM3.jpg"
                alt="Jaws: The Revenge"
                className="w-full rounded-lg"
                width={300}
                height={350}
              />
            </a>
          </div>
          <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
            <a href="details.html">
              <Image
                src="https://image.tmdb.org/t/p/original/r0bEDWO2w4a43K2xTNSF284qOsc.jpg"
                alt="Silent Hill"
                className="w-full rounded-lg"
                width={300}
                height={350}
              />
            </a>
          </div>
          <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
            <a href="details.html">
              <Image
                src="https://image.tmdb.org/t/p/original/pgqj7QoBPWFLLKtLEpPmFYFRMgB.jpg"
                alt="Solaris"
                className="w-full rounded-lg"
                width={300}
                height={350}
              />
            </a>
          </div>
          <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
            <a href="details.html">
              <Image
                src="https://image.tmdb.org/t/p/original/rxw9l9YNL14ODdmAavUwHLBjiDo.jpg"
                alt="The Ninth Gate"
                className="w-full rounded-lg"
                width={300}
                height={350}
              />
            </a>
          </div>
          <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
            <a href="details.html">
              <Image
                src="https://image.tmdb.org/t/p/original/h5v3wjJQNB7q2RntEnKDLhKtTFE.jpg"
                alt="Angel Heart"
                className="w-full rounded-lg"
                width={300}
                height={350}
              />
            </a>
          </div>
          <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
            <a href="details.html">
              <Image
                src="https://image.tmdb.org/t/p/original/fdTtij6H0sX9AzIjUeynh5zbfm7.jpg"
                alt="Lost Highway"
                className="w-full rounded-lg"
                width={300}
                height={350}
              />
            </a>
          </div>
          <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
            <a href="details.html">
              <Image
                src="https://image.tmdb.org/t/p/original/oXC0suIkn6GiyDaBj7h0AUzunKA.jpg"
                alt="Microwave Coven"
                className="w-full rounded-lg"
                width={300}
                height={350}
              />
            </a>
          </div>
          <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
            <a href="details.html">
              <Image
                src="https://image.tmdb.org/t/p/original/zK0aepoaWGk6AsUFb0DY0AKvzTE.jpg"
                alt="Eulogy for a Vampire"
                className="w-full rounded-lg"
                width={300}
                height={350}
              />
            </a>
          </div>
          <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
            <a href="details.html">
              <Image
                src="https://image.tmdb.org/t/p/original/wGP0nlI4rFI564wUY9mzxrk7rwN.jpg"
                alt="Worm Detective: The Worm is the Detective"
                className="w-full rounded-lg"
                width={300}
                height={350}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
