import React from "react";
import { type Track as SpotifyTrack } from "@spotify/web-api-ts-sdk";
import { Image } from "./Image";

export const Track = ({
  track,
  hasImage = false,
}: {
  track?: SpotifyTrack;
  hasImage: boolean;
}) => {
  if (!track) return <SkeletonTrack hasImage={hasImage} />;
  return (
    <div className="flex items-center gap-2 w-full truncate">
      {hasImage ? (
        <div className="img-wrap sm-img soft-round">
          <Image
            src={track.album.images[0]?.url}
            height={100}
            width={100}
            alt={track.name}
          />
        </div>
      ) : null}
      <div className="flex flex-col truncate">
        <div className="text-sm truncate">{track.name}</div>
        <div className="truncate subtext text-xs">
          <span
            className={`${
              !track.preview_url ? "group-hover:hidden group-focus:hidden" : ""
            }`}
          >
            {track.artists.map((artist) => artist.name).join(", ")}
          </span>
          {!track.preview_url && (
            <span className="group-hover:block group-focus:block hidden text-xs truncate">
              No preview available
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export const SkeletonTrack = ({ hasImage }: { hasImage: boolean }) => {
  return (
    <div className="flex items-center gap-2 w-full">
      {hasImage ? (
        <div className="img-wrap sm-img soft-round w-full h-full bg-blue-200 bg-opacity-50 animate-pulse">
          <div className="skeleton-img w-full h-full bg-blue-200 bg-opacity-50" />
        </div>
      ) : null}
      <div className="flex flex-col gap-2 w-full">
        <div className="skeleton-text w-3/4 bg-blue-200 bg-opacity-50 h-4" />
        <div className="skeleton-text w-1/2 bg-blue-200 bg-opacity-50 h-3" />
      </div>
    </div>
  );
};
