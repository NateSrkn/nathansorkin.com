import { NowPlaying, Weather } from "../shared/types";
import { Link } from "./Link";

export const Footer: React.FC<{
  now_playing?: NowPlaying;
  weather?: Weather;
}> = ({ now_playing, weather }) => {
  return (
    <footer className="border-t mt-8 border-t-blue-200 py-4">
      <div className="flex justify-between gap-4">
        <Link
          href="https://open.spotify.com/user/natesrkn"
          className="flex gap-2 items-center"
        >
          <div>
            {now_playing?.item?.name && (
              <div className="text-xs text-slate-400">Now Playing</div>
            )}
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
    </footer>
  );
};
