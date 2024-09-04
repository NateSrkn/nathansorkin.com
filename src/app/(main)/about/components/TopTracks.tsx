import { Track } from "@/components/Track";
import { Suspense } from "react";
import { Skeleton } from "@/components/Skeleton";

import { spotify } from "@/shared/lib/spotify";
import { Link } from "@/components/Link";

export const TopTracks = () => {
  return (
    <ul className={"grid grid-cols-1 sm:grid-cols-2 gap-2"}>
      <Suspense
        fallback={
          <Skeleton count={10} component={() => <Track hasImage={false} />} />
        }
      >
        <Content />
      </Suspense>
    </ul>
  );
};

const Content = async () => {
  const tracks = (await spotify.topTracks()) ?? { items: [] };
  return tracks.items.slice(0, 10).map((track) => (
    <li key={track.id}>
      <Link
        className={
          "group flex gap-2 items-center p-1 hover:bg-slate-600 rounded text-left w-full"
        }
        href={track.external_urls.spotify}
      >
        <Track track={track} hasImage={true} />
      </Link>
    </li>
  ));
};
