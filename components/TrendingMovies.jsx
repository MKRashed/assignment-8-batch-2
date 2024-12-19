import Image from "next/image";

export default function TrendingMovies() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
      <div id="trendingMovies" className="flex space-x-4 overflow-x-auto pb-4">
        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <a href="details.html">
            <Image
              src="https://image.tmdb.org/t/p/original/ht8Uv9QPv9y7K0RvUyJIaXOZTfd.jpg"
              alt="Smile 2"
              className="w-full rounded-lg"
              width={300}
              height={350}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">Smile 2</h3>
              <p className="text-primary text-xs">2023</p>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <a href="details.html">
            <Image
              src="https://image.tmdb.org/t/p/original/c5Tqxeo1UpBvnAc3csUm7j3hlQl.jpg"
              alt="Wicked"
              className="w-full rounded-lg"
              width={300}
              height={350}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">Wicked</h3>
              <p className="text-primary text-xs">2024</p>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <a href="details.html">
            <Image
              src="https://image.tmdb.org/t/p/original/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg"
              alt="Gladiator II"
              className="w-full rounded-lg"
              width={300}
              height={350}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">
                Gladiator II
              </h3>
              <p className="text-primary text-xs">2025</p>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <a href="details.html">
            <Image
              src="https://image.tmdb.org/t/p/original/xFSIygDiX70Esp9dheCgGX0Nj77.jpg"
              alt="Spellbound"
              className="w-full rounded-lg"
              width={300}
              height={350}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">
                Spellbound
              </h3>
              <p className="text-primary text-xs">2022</p>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <a href="details.html">
            <Image
              src="https://image.tmdb.org/t/p/original/e9tyjbF2rugENtBolTtEhHOXgzD.jpg"
              alt="Blitz"
              className="w-full rounded-lg"
              width={300}
              height={350}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">Blitz</h3>
              <p className="text-primary text-xs">2021</p>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <a href="details.html">
            <Image
              src="https://image.tmdb.org/t/p/original/2qzcxDbtRpHlcte7Df7JLMK84N.jpg"
              alt="The Piano Lesson"
              className="w-full rounded-lg"
              width={300}
              height={350}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">
                The Piano Lesson
              </h3>
              <p className="text-primary text-xs">2024</p>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <a href="details.html">
            <Image
              src="https://image.tmdb.org/t/p/original/oeDNBgnlGF6rnyX1P1K8Vl2f3lW.jpg"
              alt="We Live in Time"
              className="w-full rounded-lg"
              width={300}
              height={350}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">
                We Live in Time
              </h3>
              <p className="text-primary text-xs">2023</p>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <a href="details.html">
            <Image
              src="https://image.tmdb.org/t/p/original/pnXLFioDeftqjlCVlRmXvIdMsdP.jpg"
              alt="Armor"
              className="w-full rounded-lg"
              width={300}
              height={350}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">Armor</h3>
              <p className="text-primary text-xs">2022</p>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <a href="details.html">
            <Image
              src="https://image.tmdb.org/t/p/original/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
              alt="Deadpool & Wolverine"
              className="w-full rounded-lg"
              width={300}
              height={350}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">
                Deadpool & Wolverine
              </h3>
              <p className="text-primary text-xs">2024</p>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <a href="details.html">
            <Image
              src="https://image.tmdb.org/t/p/original/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg"
              alt="The Wild Robot"
              className="w-full rounded-lg"
              width={300}
              height={350}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">
                The Wild Robot
              </h3>
              <p className="text-primary text-xs">2023</p>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <a href="details.html">
            <Image
              src="https://image.tmdb.org/t/p/original/lqoMzCcZYEFK729d6qzt349fB4o.jpg"
              alt="The Substance"
              className="w-full rounded-lg"
              width={300}
              height={350}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">
                The Substance
              </h3>
              <p className="text-primary text-xs">2022</p>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <a href="details.html">
            <Image
              src="https://image.tmdb.org/t/p/original/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg"
              alt="Alien: Romulus"
              className="w-full rounded-lg"
              width={300}
              height={350}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">
                Alien: Romulus
              </h3>
              <p className="text-primary text-xs">2024</p>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <a href="details.html">
            <Image
              src="https://image.tmdb.org/t/p/original/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg"
              alt="Red One"
              className="w-full rounded-lg"
              width={300}
              height={350}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">Red One</h3>
              <p className="text-primary text-xs">2023</p>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <a href="details.html">
            <Image
              src="https://image.tmdb.org/t/p/original/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
              alt="Gladiator"
              className="w-full rounded-lg"
              width={300}
              height={350}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">
                Gladiator
              </h3>
              <p className="text-primary text-xs">2000</p>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <a href="details.html">
            <Image
              src="https://image.tmdb.org/t/p/original/cNtAslrDhk1i3IOZ16vF7df6lMy.jpg"
              alt="Absolution"
              className="w-full rounded-lg"
              width={300}
              height={350}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">
                Absolution
              </h3>
              <p className="text-primary text-xs">2021</p>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <a href="details.html">
            <Image
              src="https://image.tmdb.org/t/p/original/bx92hl70NUhojjO3eV6LqKllj4L.jpg"
              alt="GTMAX"
              className="w-full rounded-lg"
              width={300}
              height={350}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">GTMAX</h3>
              <p className="text-primary text-xs">2025</p>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <a href="details.html">
            <Image
              src="https://image.tmdb.org/t/p/original/m0SbwFNCa9epW1X60deLqTHiP7x.jpg"
              alt="Moana 2"
              className="w-full rounded-lg"
              width={300}
              height={350}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">Moana 2</h3>
              <p className="text-primary text-xs">2024</p>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <a href="details.html">
            <Image
              src="https://image.tmdb.org/t/p/original/4t80WORFWqDYf4BRwV2jrXNHJdN.jpg"
              alt="The Merry Gentlemen"
              className="w-full rounded-lg"
              width={300}
              height={350}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">
                The Merry Gentlemen
              </h3>
              <p className="text-primary text-xs">2022</p>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <a href="details.html">
            <Image
              src="https://image.tmdb.org/t/p/original/zciWal3a5QPjqqJAgmpHVLBlFMj.jpg"
              alt="Joy"
              className="w-full rounded-lg"
              width={300}
              height={350}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">Joy</h3>
              <p className="text-primary text-xs">2023</p>
            </div>
          </a>
        </div>
        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <a href="details.html">
            <Image
              src="https://image.tmdb.org/t/p/original/o8qtMeCskitW5QwSu6O1nP4jN6z.jpg"
              alt="Out of My Mind"
              className="w-full rounded-lg"
              width={300}
              height={350}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">
                Out of My Mind
              </h3>
              <p className="text-primary text-xs">2021</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
