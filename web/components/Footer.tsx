import { NowPlaying, Weather } from "../shared/types";
import { Link } from "./Link";

export const Footer: React.FC<{
  now_playing?: NowPlaying;
  weather?: Weather;
}> = ({ now_playing, weather }) => {
  return (
    <footer className="border-t mt-8 border-t-blue-200 pt-4">
      <div className="flex justify-between gap-4">
        <Link
          href="https://open.spotify.com/user/natesrkn"
          className="flex gap-2 items-center"
        >
          <div>
            <div>{now_playing?.item?.name || "Not Playing"}</div>
            <div className="text-sm truncate">
              {now_playing?.item?.artists
                .map((artist) => artist.name)
                .join(", ") || "Spotify"}
            </div>
          </div>
        </Link>
        {weather && (
          <div className="flex flex-shrink-0">
            <div className="ml-auto">
              {weather.name} / {Math.round(weather.main.temp)}
              <sup>&#8457;</sup>
            </div>
          </div>
        )}
      </div>
      <nav className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4 mb-12">
        <div className="flex flex-col gap-2">
          <Link className="general-link" href="/">
            Home
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link className="general-link" href="https://instagram.com/n8bytes">
            Instagram
          </Link>
          <Link className="general-link" href="https://github.com/natesrkn">
            GitHub
          </Link>
          <Link
            className="general-link"
            href="https://www.linkedin.com/in/natesrkn/"
          >
            LinkedIn
          </Link>
        </div>
      </nav>
    </footer>
  );
};
