import { Link } from "./Link";
import { useNowPlayingQuery, useWeatherQuery } from "@/hooks/queries";
import { Track, TrackItem } from "@spotify/web-api-ts-sdk";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t mt-8 border-t-blue-200 py-4 root px-4 md:px-0">
      <div className="flex justify-between gap-4">
        <NowPlaying />
        <Weather />
      </div>
    </footer>
  );
};

const isTrack = (item: TrackItem | undefined): item is Track => {
  return item?.type === "track";
};
const NowPlaying = () => {
  const { data: nowPlaying, status } = useNowPlayingQuery();
  if (status === "error") return null;
  if (status !== "success") return null;
  return (
    <Link
      href="https://open.spotify.com/user/natesrkn"
      className="flex gap-2 items-center max-w-[50%]"
    >
      <div className={"flex flex-col truncate"}>
        {nowPlaying.item.name && (
          <div className="text-xs text-slate-400">Now Playing</div>
        )}
        <div className="truncate">{nowPlaying.item.name || "Not Playing"}</div>
        {isTrack(nowPlaying.item) && (
          <div className="text-xs truncate">
            {nowPlaying.item.artists.map((artist) => artist.name).join(", ")}
          </div>
        )}
      </div>
    </Link>
  );
};

const Weather = () => {
  const { data: weather, status } = useWeatherQuery();
  if (status !== "success") return null;
  return (
    <div className="flex flex-shrink-0">
      <div className="ml-auto">
        {weather.name} / {Math.round(weather.main.temp)}
        <sup>&#8457;</sup>
      </div>
    </div>
  );
};
